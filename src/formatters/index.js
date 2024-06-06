import getFormatStylish from './formStylish.js';
import formPlain from './formPlain.js';
import getFormatJson from './formJson.js';

const getFormat = (abstractSyntaxTree, format) => {
  switch (format) {
    case 'json':
      return getFormatJson(abstractSyntaxTree);
    case 'plain':
      return formPlain(abstractSyntaxTree);
    case 'stylish':
      return getFormatStylish(abstractSyntaxTree);
    default:
      throw new Error(`Error: "${format}" - this format is not supported`);
  }
};

export default getFormat;
