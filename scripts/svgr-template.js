function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['jsx','typescript'] });
  return typeScriptTpl.ast`
    import * as React from 'react';
    import { ILogoProps } from '../styled';
    const ${componentName} = (props: ILogoProps) => ${jsx};
    export default ${componentName};
  `;
}
module.exports = template;
