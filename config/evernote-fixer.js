const text = '';

text
    .replace(/<span style=\{\{ ?fontStyle: 'italic' ?\}\}>([^<]*)<\/span>/g, '<i>$1</i>')
    .replace(/<span style=\{\{ ?fontWeight: 'bold' ?\}\}>([^<]*)<\/span>/g, '<strong>$1</strong>')
    .replace(/<span style=\{\{fontSize: 14, fontFamily: '"Helvetica Neue"'\}\}>([^<]*)<\/span>/g, '<p>$1</p>')
    .replace(/<span style=\{\{fontSize: 14, fontStyle: 'italic'\}\}>([^<]*)<\/span>/g, '<i>$1</i>')
    .replace(/<\w*> ?<\/\w*>/g, ' ') // empty tags
    .replace(/<[0-9a-zA-Z =":;-]*> ?(<br \/>)?(\n +)?<\/\w*>/g, ' ') // complex empty tags
