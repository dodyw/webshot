const playwright = require('playwright');
const express = require('express');
const cors = require('cors');
const sharp = require('sharp');

const app = express();
app.use(cors());

const TIMEOUT = 180000; // 3 minutes in milliseconds
const PORT = process.env.PORT || 3000;

async function captureScreenshot(url, screenSize, outputSize, fullScreen) {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();

    try {
        // Set viewport size
        await page.setViewportSize(screenSize);

        await page.goto(url, { waitUntil: 'networkidle', timeout: TIMEOUT });

        let screenshotOptions = {
            fullPage: fullScreen,
        };

        // Capture the screenshot
        const screenshotBuffer = await page.screenshot(screenshotOptions);

        // Resize the image
        const resizedBuffer = await sharp(screenshotBuffer)
            .resize(outputSize.width, outputSize.height, {
                fit: 'cover',
                position: 'top'
            })
            .toBuffer();

        return resizedBuffer;
    } finally {
        await browser.close();
    }
}

async function handleScreenshotRequest(url, screenSize, outputSize, fullScreen) {
    const capturePromise = captureScreenshot(url, screenSize, outputSize, fullScreen);
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Timeout after 3 minutes')), TIMEOUT)
    );

    return Promise.race([capturePromise, timeoutPromise]);
}

app.get('/screenshot', async (req, res) => {
    const { url, width, height, outputWidth, outputHeight, fullScreen } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'Missing URL parameter' });
    }

    const screenSize = {
        width: parseInt(width) || 1920,
        height: parseInt(height) || 1080
    };

    const outputSize = {
        width: parseInt(outputWidth) || screenSize.width,
        height: parseInt(outputHeight) || screenSize.height
    };

    const isFullScreen = fullScreen === 'true';

    try {
        const screenshotBuffer = await handleScreenshotRequest(url, screenSize, outputSize, isFullScreen);
        res.setHeader('Content-Type', 'image/png');
        res.send(screenshotBuffer);
    } catch (error) {
        console.error('Error capturing screenshot:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});