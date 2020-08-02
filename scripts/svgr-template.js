function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['jsx','typescript'] });
  return typeScriptTpl.ast`
    import * as React from 'react';
    import { IIconProps } from '../styled';
    const ${componentName} = (props: IIconProps) => ${jsx};
    export default ${componentName};
  `;
}

module.exports = template;
