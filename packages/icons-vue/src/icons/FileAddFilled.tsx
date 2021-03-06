// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileAddFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileAddFilledSvg}></AntdIcon>;
};

FileAddFilled.displayName = 'FileAddFilled';
FileAddFilled.inheritAttrs = false;
export default FileAddFilled;