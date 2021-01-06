// The intention of the program below is to output a paragraph. Copy and paste the program into a JavaScript console (e.g., from the Chrome Developer Tools), then run it. Is the output what you expected? Are there any bugs/errors?

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                   ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                   dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                   ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                   diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
                   hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

console.log(paragraph);

// A syntax error occurs complaining of an "Invalid or unexpected token". The reason for the error is because there is whitespace after the \ character on line 5. The \ expects there to be no whitespace following it so if there is any, it raises an error. Remove the whitespace to fix this.
//
// Note that even with the error fixed, the formatting of the paragraph isn't what you might expect because the whitespace to the left of each line is included in the output. To fix this, remove the whitespace or use string concatenation with each line as a separate string.
