/*

rough pseudocode for how the API will work:


var conv_text = converted text from tesseract

must somehow display conv_text as well as new_conv_text after (if not in english)

var text = 

if lang != english:
    convert to english

    if not do nothing



    the language detection looks something like this in C+

    google.language.detect(text, function(result) {
        if (!result.error) {
            var language = 'unknown';
            for (l in google.language.Languages) {
            if (google.language.Languages[l] == result.language) {
                language = l;
                break;
            }
            }
            var container = document.getElementById("detection");
            container.innerHTML = text + " is: " + language + "";
        }
    });



    https://cloud.google.com/translate/docs/simple-translate-call#translate_translate_text-drest

    the request for the json body would be:

    {
        "q": "The Great Pyramid of Giza (also known as the Pyramid of Khufu or the Pyramid of Cheops) is the oldest and largest of the three pyramids in the Giza pyramid complex.",
        "source": langdet,
        "target": "en",
        "format": "text"
    }

    given that var langdet = detected language given by the google API

    https://cloud.google.com/translate/docs/simple-translate-call#translate_translate_text-drest



    never mind i think we can use this instead

    https://stackoverflow.com/questions/5388127/javascript-jquery-get-text-and-translate-it


    //html format: <div id="content"></div>


    // script: 
    google.load("language", "1");

        function initialize() {
            var content = document.getElementById('content');
            content.innerHTML = '<div id="text">    conv_text    <\/div><div id="translation"/>';
            var text = document.getElementById("text").innerHTML;
            google.language.translate(text, langdet, 'en', function(result) {
                var translated = document.getElementById("translation");
                if (result.translation) {
                    translated.innerHTML = result.translation;
                }
            });
        }
        google.setOnLoadCallback(initialize);


*/