# WebShot -Website Screenshot Service

## Overview

This is a Node.js-based web service that captures screenshots of websites using Playwright. It provides a flexible API to capture full or partial screenshots of web pages, with options to specify viewport sizes and output image dimensions.

## Purpose

The main purpose of this service is to allow users to easily capture screenshots of websites programmatically. This can be useful for:

- Monitoring website changes
- Creating thumbnails for web directories
- Automated testing of web layouts
- Generating visual content for presentations or reports

## Features

- Capture full page or viewport screenshots
- Customize viewport size to simulate different devices
- Resize output images to desired dimensions
- Cross-origin resource sharing (CORS) enabled
- Timeout handling for long-running requests

## Requirements

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

## Libraries Used

- [Express](https://expressjs.com/): Web server framework
- [Playwright](https://playwright.dev/): Browser automation library
- [Sharp](https://sharp.pixelplumbing.com/): Image processing library
- [CORS](https://github.com/expressjs/cors): CORS middleware for Express

## Installation

1. Clone the repository:
   ~~~
   git clone https://github.com/dodyw/webshot cd website-screenshot-service
   ~~~
2. Install dependencies:
   ~~~
   npm install
   ~~~

## Running the Service

1. Start the server:
   ~~~
   node app.js
   ~~~
2. The server will start on port 3000 by default. You can change this by setting the `PORT` environment variable.

## API Usage

The service exposes a single endpoint:
~~~
GET /screenshot
~~~

### Query Parameters

- `url` (required): The URL of the website to capture
- `width` (optional): Viewport width (default: 1920)
- `height` (optional): Viewport height (default: 1080)
- `outputWidth` (optional): Output image width (default: same as viewport width)
- `outputHeight` (optional): Output image height (default: same as viewport height)
- `fullScreen` (optional): Whether to capture the full page (default: false)

## Sample curl Commands

Here are sample curl commands to demonstrate various use cases:

1. Basic usage (default settings):
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/" --output screenshot.png
   ~~~
2. Custom viewport size (1366x768):
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=1366&height=768" --output screenshot.png
   ~~~

3. Custom output size (800x600):
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&outputWidth=800&outputHeight=600" --output screenshot.png
   ~~~

4. Full page screenshot:
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&fullScreen=true" --output screenshot.png
   ~~~

5. Mobile device simulation (iPhone 12 Pro):
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=390&height=844" --output screenshot.png
   ~~~

6. Tablet device simulation (iPad Air):
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=820&height=1180" --output screenshot.png
   ~~~

7. Ultra-wide monitor (3440x1440):
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=3440&height=1440" --output screenshot.png
   ~~~

8. 4K resolution (3840x2160):
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=3840&height=2160" --output screenshot.png
   ~~~

9. Custom viewport with square output:
   ~~~
   curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=1920&height=1080&outputWidth=1000&outputHeight=1000" --output screenshot.png
   ~~~

10. Mobile landscape mode (iPhone 12 Pro):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=844&height=390" --output screenshot.png
    ~~~

11. Narrow viewport (600x1800):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=600&height=1800" --output screenshot.png
    ~~~

12. Wide but short viewport (2560x720):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=2560&height=720" --output screenshot.png
    ~~~

13. Very small viewport (320x240):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=320&height=240" --output screenshot.png
    ~~~

14. Large viewport with small output (viewport: 2560x1440, output: 640x360):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=2560&height=1440&outputWidth=640&outputHeight=360" --output screenshot.png
    ~~~

15. Full page with custom output size:
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&fullScreen=true&outputWidth=1200&outputHeight=630" --output screenshot.png
    ~~~

16. Samsung Galaxy S20 simulation:
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=360&height=800" --output screenshot.png
    ~~~

17. Google Pixel 5 simulation:
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=393&height=851" --output screenshot.png
    ~~~

18. iPad Pro 12.9" simulation:
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=1024&height=1366" --output screenshot.png
    ~~~

19. Microsoft Surface Pro 7 simulation:
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=912&height=1368" --output screenshot.png
    ~~~

20. Ultrawide monitor with vertical crop (3440x1440 to 3440x1000):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=3440&height=1440&outputWidth=3440&outputHeight=1000" --output screenshot.png
    ~~~

21. Capture top half of the page:
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=1920&height=1080&outputHeight=540" --output screenshot.png
    ~~~

22. Simulating a dual monitor setup (3840x1080):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=3840&height=1080" --output screenshot.png
    ~~~

23. Extreme widescreen (5120x1440):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=5120&height=1440" --output screenshot.png
    ~~~

24. Very tall, narrow viewport (480x2160):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=480&height=2160" --output screenshot.png
    ~~~

25. Old-school monitor resolution (800x600):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=800&height=600" --output screenshot.png
    ~~~

26. Widescreen to square crop (1920x1080 to 1080x1080):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=1920&height=1080&outputWidth=1080&outputHeight=1080" --output screenshot.png
    ~~~

27. Simulate a smartwatch display (Apple Watch Series 6 - 40mm):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=324&height=394" --output screenshot.png
    ~~~

28. Vertical billboard display (1080x1920):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=1080&height=1920" --output screenshot.png
    ~~~

29. Cinema 4K resolution (4096x2160):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=4096&height=2160" --output screenshot.png
    ~~~

30. Legacy 4:3 aspect ratio (1024x768):
    ~~~
    curl "http://localhost:3000/screenshot?url=https://www.jetbrains.com/&width=1024&height=768" --output screenshot.png
    ~~~


## Error Handling

The service will return appropriate HTTP status codes and error messages:

- 400 Bad Request: If the `url` parameter is missing
- 500 Internal Server Error: If there's an error capturing the screenshot or processing the image

## Limitations

- The service has a timeout of 3 minutes for each request
- The maximum viewport size is limited by the available system resources
- Some websites may detect and block automated access

## Author

Dody Rachmat Wicaksono 
- Website: [www.nicecoder.com](https://www.nicecoder.com)

## Work Opportunities

I'm open to collaborating on interesting projects related to web development, automation, and software engineering. If you have a project idea or need assistance with your development needs, please don't hesitate to reach out. I'm always excited to discuss new opportunities and contribute my skills to innovative projects.

To get in touch regarding potential work or collaborations:

Email me at: [dody@nicecoder.com](mailto:dody@nicecoder.com)

I look forward to hearing about your projects and exploring how we can work together!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
