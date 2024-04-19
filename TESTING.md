# Testing
> [!NOTE]
> Return back to the [README.md](README.md) file.

## Code Validation
### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
|  | advice.html | ![screenshot](documentation/validation/advice.png) | Pass. |
|  | calculator.html | ![screenshot](documentation/validation/calculator.png) |  Warning line 53 for empty div result element needed for Java Script.|
|  | index.html | ![screenshot](documentation/validation/index.png) | Pass. |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets | style.css | ![screenshot](documentation/validation/css.png) | Pass. |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets | script.js | ![screenshot](documentation/validation/js-hint.png) | 5 minor read only warnings. |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.
 | Broswer | Home  | Calculator | Advice | Notes |
| :------------ |:---------------:| -----:| -----:| -----:|
| Chrome |  ![screenshot](documentation/browsers/chrome-index.png)  | ![screenshot](documentation/browsers/chrome-cal.png) | ![screenshot](documentation/browsers/chrome-advice.png) | Works as expected |
| Firefox | ![screenshot](documentation/browsers/firefox-index.png) | ![screenshot](documentation/browsers/firefox-cal.png) | ![screenshot](documentation/browsers/firefox-advice.png) | Works as expected |
| Edge | ![screenshot](documentation/browsers/edge-index.png) | ![screenshot](documentation/browsers/edge-cal.png) | ![screenshot](documentation/browsers/edge-advice.png) | Works as expected |
| Opera | ![screenshot](documentation/browsers/opera-index.png) | ![screenshot](documentation/browsers/opera-cal.png) | ![screenshot](documentation/browsers/opera-advice.png) | Works as expected |

## Responsiveness

 | Device | Home  | Calculator | Advice | Notes |
| :------------ |:---------------:| -----:| -----:| -----:|
| Iphone 12 (DevTools) | ![screenshot](documentation/responsiveness/iphone-12-index.png) | ![screenshot](documentation/responsiveness/iphone-12-cal.png) | ![screenshot](documentation/responsiveness/iphone-12-advice.png) | Works as expected |
| Iphone XR (DevTools) | ![screenshot](documentation/responsiveness/iphone-XR-index.png) | ![screenshot](documentation/responsiveness/iphone-xr-advice.png) | ![screenshot](documentation/responsiveness/iphone-xr-advice.png) | Works as expected |
| Desktop | ![screenshot](documentation/responsiveness/desktop-index.png) | ![screenshot](documentation/responsiveness/desktop-cal.png) | ![screenshot](documentation/responsiveness/desktop-advice.png) | Works as expected |
| Ipad Pro | ![screenshot](documentation/responsiveness/ipad-index.png) | ![screenshot](documentation/responsiveness/ipad-pro-cal.png) | ![screenshot](documentation/responsiveness/iphone-xr-advice.png) | Works as expected |
| Galaxy A51 | ![screenshot](documentation/responsiveness/galaxy-A51-index.png) | ![screenshot](documentation/responsiveness/galaxy-A51-cal.png) | ![screenshot](documentation/responsiveness/galaxy-a51-advice.png) | Works as expected |
| Nest Hub Max | ![screenshot](documentation/responsiveness/nest-hub-max.png) | ![screenshot](documentation/responsiveness/nest-hub-max-cal.png) | ![screenshot](documentation/responsiveness/nest-hub-max-advice.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

  | Page | Desktop  | Mobile |  Notes |
| :------------ |:---------------:| -----:| -----:|
| Home | ![screenshot](documentation/lighthouse/lighthouse-index.png) | ![screenshot](documentation/lighthouse/lighthouse-mobile-index.png) | Pass |
| Calculator | ![screenshot](documentation/lighthouse/lighthouse-cal.png) | ![screenshot](documentation/lighthouse/lighthouse-mobile-cal.png) | Slow to respond due to third party video |
| Advice | ![screenshot](documentation/lighthouse/lighthouse-advice.png) | ![screenshot](documentation/lighthouse/lighthouse-mobile-advice.png) | Some minor warnings |

## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to have a brief desciprtion when entering, so that I can understand what the site is about. | ![screenshot](documentation/features/landing-page.png) |
| As a new site user, I would like to use the calculator easily and with different measuring units, so that I can get correct results depending on my measuring tool. | ![screenshot](documentation/features/calculator.png) |
|  As a new site user, I would like to learn how to gather correct measurements, so that I implement it into the calculator. | ![screenshot](documentation/features/information-toggle.png) |
| As a new site user, I would like to gain knowledge on how to imporve my horses health based on the results I recieved, so that I can become a better equestrian owner.| ![screenshot](documentation/features/advice-modal.png) |
| As a new site user, I would like to use a restart button, incase I have multiple horses' weights to check.| ![screenshot](documentation/features/try-again-button.png) 
| As a returning site user, I would like to reuse the calculator with different measurments, so that I can have different results. | ![screenshot](documentation/features/calculator.png) |
| As a returning site user, I would like to quickly and easily access the advice I need it without having to run the calculator, so that I can use it as guide. | ![screenshot](documentation/responsiveness/desktop-advice.png) |

## Bugs

-  Video Playback Error: `jquary` undefinded

    - ![screenshot](documentation/bugs/video-bug-1.png)
    - ![screenshot](documentation/bugs/video-bug-2.png)

    - To fix this, I used `console log` to identify the issue and changed the langauge to Jquary shown below.
    - ![screenshot](documentation/bugs/bug-vid-3.png)

- Text and Display Issues: 

    ![screenshot](documentation/bugs/bug-units-js.png)

    - To fix this, I used `innerText` and `style.display` techniques.

- Image Size Issues: 

    ![screenshot](documentation/bugs/bug-imgs.png)

    - To fix this, I used https://compresspng.com/ to convert the images to help with loading speed and lighthouse audit results.

> [!WARNING]  
> ## Unfixed Bugs
### Version Control / Commits

I originally started my project using "past-tense" verbs in my commit message, however, after speaking with my mentor, we discussed the appropriate way of using the "imperative mood" for commits.

### Calculator Video Speed / Low Lighthouse Audit

I am aware the response speed on the calculator page relating to the informative youtube video is not of satisfactory time, effecting the lighthouse audit result. Multiple steps were taken to resolve this for example, adding a Lazy load third-party resource or using a Lite youtube embed, for example "<lite-youtube videoid="{{ latestSomeAntics.id }}" playlabel="Play {{ latestSomeAntics.title }}"></lite-youtube>". I believe they did not work due to my limited experience. Lastly I had tried using Jquary, however after extensinve reasreaching, found it adds additional overhead to web pages, therefore I did not choose this option either.
> [!NOTE]  
> There are no remaining bugs that I am aware of.
