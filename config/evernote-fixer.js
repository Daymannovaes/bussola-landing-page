const text = '';

text
    .replace(/<span style=\{\{ ?fontStyle: 'italic' ?\}\}>([^<]*)<\/span>/g, '<i>$1</i>')
    .replace(/<span style=\{\{ ?fontWeight: 'bold' ?\}\}>([^<]*)<\/span>/g, '<strong>$1</strong>')
    .replace(/<\w*> ?<\/\w*>/g, ' ') // empty tags
