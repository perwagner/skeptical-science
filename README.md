# Skeptical Science App
This app can be found for both Android and iOS here:  
Android:  xxx
iOS: yyy

It is build with data from this amazing site: https://skepticalscience.com/

## Firestore structure
```
articles: {
    ID: {
        basic_text (string): The basic text in markdown,
        climate_myth (string): The climate myth to dispell,
        title: The text to put on the browse list page,
        url: URL to the original text
        url_text: Text for the url to the original text
    }
}
```


### Notes on markdown
Due to unknown reasons, the markdown plugin used doesn't work well with data extracted from Firestore, thus in the markdown, you will have to insert \<BR> where you want a new line. The app will then replace this \<BR> with a newline in the output.


# Setup
## app.json
Copy and rename `app.json_sample` to `app.json` and fill out the blanks in the file.


# References
* https://infoshri.com/viral-news/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5/
* https://firebase.google.com/

