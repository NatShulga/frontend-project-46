const parse = (content, extname) => {
    switch (extname) {
      case 'json':
        return JSON.parse(content);
      case 'yml':
      case 'yaml':
        return yaml.load(content);
      default:
        throw new Error(`Error: "${extname}" - this extname is not supported`);
    }
  };
  
  export default parse;