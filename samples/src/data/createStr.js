
const createStr =
"import React, { useEffect } from 'react';\n" +
"import loader from '@ibsheet/loader'\n" +
"const IBSheet8 = (props) => {\n" + 
  "\tconst id = props.id || 'sheet';\n" +
  "\tconst el = props.el || 'sheetDiv';\n" +
  "\tconst options = props.options || {};\n" +
  "\tconst basicStyle = {\n" +
    "\t\twidth: props.width || '100%',\n" +
    "\t\theight: 'calc(100vh - 300px)'\n" +
  "}\n" +
  "\tconst elStyle = {\n" +
    "\t\twidth: '100%',\n" +
    "\t\theight: props.height || basicStyle.height,\n" +
  "\t}\n" +

  "\tuseEffect(() => {\n" +
    "\t\tloader.createSheet({\n" +
      "\t\t\tid: id,\n" +
      "\t\t\tel: el,\n" +
      "\t\t\toptions: options\n" +
    "\t\t})\n" +
    "\t\t.then((sheet) => {\n" +
      "\t\t\tconsole.log('createSheet', sheet.id);\n" +
    "\t\t});\n" +
    "\t\treturn () => {\n" +
      "\t\t\tloader.removeSheet(id);\n" +
    "\t\t}\n" +
  "\t}, []);\n" +

  "\treturn (\n" +
    "\t\t<>\n" +
      "\t\t\t<div style={ basicStyle }>\n" +
        "\t\t\t\t<div id={ el } style={ elStyle }></div>\n" +
      "\t\t\t</div>\n" +
    "\t\t</>\n" +
  "\t);\n" +
"}";

export default createStr;