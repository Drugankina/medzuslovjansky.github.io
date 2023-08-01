const visit = require('unist-util-visit');

const plugin = (_options) => {
  function directiveTransformer(ast) {
    visit(ast, (node) => {
      if (
        node.type !== 'leafDirective' &&
        node.type !== 'containerDirective' &&
        node.type !== 'tableDirective' &&
        node.type !== 'textDirective'
      ) {
        return;
      }

      switch (node.name) {
        case 'kbd':
          return kbd(node);
        case 'abbr':
          return abbr(node);
        case 'notr':
          return notr(node);
        case 'ipa':
          return ipa(node);
        case 'be':
        case 'bg':
        case 'bs':
        case 'cnr':
        case 'cs':
        case 'csb':
        case 'dsb':
        case 'en':
        case 'hr':
        case 'hsb':
        case 'isv':
        case 'mk':
        case 'pl':
        case 'ru':
        case 'rue':
        case 'sk':
        case 'sl':
        case 'sr':
        case 'uk':
        case 'zls':
          return lang(node);
      }
    });
  }

  return directiveTransformer;
};

function isWordFragment(node) {
  const text = node.value;
  if (text.startsWith('-') || text.endsWith('-')) {
    return true;
  }

  if (text.length <= 3) {
    return true;
  }

  return false;
}

function prepareNode(node) {
  const data = node.data = node.data ?? {};
  const hName = pickTagName(node);
  data.hName = hName;
  return node;
}

function pickTagName(node) {
  switch (node.type) {
    case 'textDirective':
      return 'span';
    case 'inlineCode':
      return 'code';
    default:
      return 'div';
  }
}

function kbd(node) {
  prepareNode(node).data.hName = 'kbd';
}

function notr(node) {
  prepareNode(node).data.hProperties = { className: 'notranslate', translate: 'no' };
}

function ipa(node) {
  prepareNode(node).data.hName = 'IPA';
}

function abbr(node) {
  Object.assign(prepareNode(node).data, {
    hName: 'abbr',
    hProperties: {
      title: node.attributes?.title ?? getShallowText(node),
    },
  });
}

function getShallowText(node) {
  let result = '';
  const children = node.children;
  const n = children.length;

  for (let i = 0; i < n; i++) {
    const child = children[i];
    if (child.type === 'text') {
      result += child.value;
    }
  }

  return result;
}

function lang(node) {
  const lang = node.name === 'isv' ? 'art-x-interslv' : node.name;
  prepareNode(node).data.hProperties = { className: 'notranslate', translate: 'no', lang };
}

module.exports = plugin;