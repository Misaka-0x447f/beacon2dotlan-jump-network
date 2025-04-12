import './App.css';
import { css } from '@emotion/react';
import { Button, GroupBox, TextInput, Window, WindowContent, WindowHeader } from 'react95';
import { useState } from 'react';

export const App = () => {
  const [input, setInput] = useState('');
  return (
    <div css={
      css`
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #012;
      `
    }>
      <Window css={css`
          width: 60vw;
          height: 40vw;
          display: flex;
          flex-direction: column;
      `}>
        <WindowHeader>
          <span>beacon2dotlan-jump-network.114514</span>
        </WindowHeader>
        <WindowContent css={css`
            display: flex;
            flex-direction: column;
            flex: 1;
        `}>
          <div css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
              flex: 1;
          `}>
          <TextInput css={css`
            flex: 1;
          `} placeholder={'eve-scout.com 格式'} multiline fullWidth value={input}
                     onChange={e => setInput(e.target.value)}></TextInput>
          <Button disabled={!input}>转换到 dotlan jump map 格式</Button>
          <TextInput css={css`
            flex: 1;
          `} readOnly placeholder={'dotlan 格式'} multiline fullWidth></TextInput>
          </div>
          <GroupBox
            css={css`
              margin-top: 32px;
            `}
            label={'有什么用，怎么用？'}>
            <div>
              此工具能将 <a href={'eve-scout.com'} target={'_blank'}>
              https://eve-scout.com</a> 的游戏内文件夹提供的虫洞转换为
              &nbsp;<a target={'_blank'}
                       href={'https://evemaps.dotlan.net/bridges'}
            >https://evemaps.dotlan.net/bridges</a>&nbsp;
              所使用的跳桥网络格式，这样你就可以把结果导入进去并联合查询路线（例如，从 PR-8CA 到 Thera 再到 Turnur 再到
              Amarr
              这样的复杂路线。）
            </div>
            <div>
              使用很简单，把文件夹内容复制到上面，然后在下面复制结果。
            </div>
          </GroupBox>
        </WindowContent>
      </Window>
    </div>
  );
};

export default App;
