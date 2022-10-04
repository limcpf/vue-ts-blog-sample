import md from "markdown-it";

const markdown = md({
    html:         false,      
    xhtmlOut:     false,       
    breaks:       false,        
    langPrefix:   'language-',
    linkify:      false,        
    typographer:  false,
    quotes: '“”‘’',
    highlight: function (/*str, lang*/) { return ''; }
})

export default markdown;