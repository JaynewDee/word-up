# WordUp

#### Assess a webpage for readability and more

---

## [Coleman-Liau](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index)

> ### _CLI = 0.0588L - 0.296S - 15.8_
>
> > > **_Where_**:
> > >
> > > - `L` is the average number of letters per 100 words.
> > > - `S` is the average number of sentences per 100 words.

## Description

> > > WorUp is a simple chrome extension designed to allow the user to quickly  
> > > and easily generate meaningful insights about the text content of a webpage.
> > > The project in it's current state consists of three primary scripts:

---

> > > 1. **Background.js**
> > >
> > > - A simple background script acts as a service worker, utilizing persistent storage to manage application state.

---

> > > 2. **Popup.js**
> > >
> > > - The extension popup window carries the script for executing the analysis.
> > > - Currently, the popup window includes two interactive options: A button which executes the analyzing script,
> > >   and a button which navigates the user to the options page.

---

> > > 3. **Options.js**
> > >
> > > - The options script handles updating persistent user settings in chrome storage upon selection of preferred options.
> > > - Currently, the options page allows the user to make adjustments to the background color and font color of the html page which displays analysis results.

## Implementation Considerations

> > > This application was designed with three primary principles in mind:
> > >
> > > 1. **Scalability**
> > >
> > > - A minimum viable product should be fully functional, but should also include adequate room for future features potentially not yet planned out. This extension was built under full consideration of future development. I have done my best to implement the code in such a way that current features are entirely extensible and future features may be cleanly integrated into the existing codebase.
> > >
> > > 2. **Performance**
> > >
> > > - The analysis of an indeterminate amount of text allows for a potentially massive input with the ability to drastically slow JavaScript's execution. In light of this, all functionalities were built in consideration of runtime efficiency, and any quadratic operations have been strictly avoided.
> > >
> > > 3. **Presentation**
> > >
> > > - A monospace font was chosen to emphasize the analytical nature of the application.
> > > - A black & white color scheme maximizes visibility through contrast and prohibits clashing of the extension color theme, and the various color options available on the options page.
> > > - Hover effects provide a minimum of haptic feedback, communicating the interactivity of certain elements.

## Future Development

> > > Plans for this application extend well beyond the need for a final project submission. I am captivated by the potential for small, meaningful calculations to enhance a reader's understanding of the text they are engaging with. It is my wish to add such features that will provide the user with an elevated understanding of the text in question, ultimately inspiring ideas previously just out of reach. In light of this, a future version of the extension will include the ability to analyze the text based on a variety of different readability formulas, including but not limited to:
> > >
> > > - [The Fog Scale](https://en.wikipedia.org/wiki/Gunning_fog_index)
> > > - [Flesch-Kincaid](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests)
> > > - [Linsear Write](https://en.wikipedia.org/wiki/Linsear_Write)

## Conclusion

> > > This project has been a joy to build. A wealth of programming problems and a healthy bit of frustration later, I have managed to create an application that I am proud to share despite its flaws and presently minimal functionalities.

> > > Bittersweetly I offer a loving goodbye to the wonderful creators of CS50x.
> > >
> > > And so I press on toward greater understanding!
> > >
> > > **Best always**,  
> > > _Joshua_
