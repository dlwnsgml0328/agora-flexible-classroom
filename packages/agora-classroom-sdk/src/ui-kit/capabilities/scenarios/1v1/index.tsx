import classnames from 'classnames';
import { observer } from 'mobx-react';
import { DialogContainer } from '~containers/dialog';
import { LoadingContainer } from '~containers/loading';
import { NavigationBarContainer } from '~containers/nav';
import { Aside, Content, Layout } from '~components/layout';
import { Room1v1StreamsContainer } from '~containers/stream/room-1v1-player';
import { ChatWidgetPC } from '~containers/widget/chat-widget';
import Room from '../room';
import { ExtensionAppContainer } from '~containers/extension-app-container';

import { ToastContainer } from '~containers/toast';
import { CollectorContainer } from '~containers/board';
import { useStore } from '@/infra/hooks/use-edu-stores';

export const OneToOneScenario = observer(() => {
  const layoutCls = classnames('edu-room');
  const {
    streamWindowUIStore: { containedStreamWindowCoverOpacity },
  } = useStore();
  return (
    <Room>
      {/* <FixedAspectRatioRootBox trackMargin={{ top: 27 }}> */}
      <Layout className={layoutCls} direction="col">
        <Layout className="horizontal">
          <Content>
            <div style={{ width: '100%' }}>
              {/* <h3>안녕하세요 여기에 컨텐츠를 채우면 어떻게 될까요?</h3> */}
              <iframe style={{ width: '100%', height: '100%' }} src="https://eazel.net/"></iframe>
            </div>
            <Aside
              className="aisde-fixed fcr-room-1v1"
              style={{ opacity: containedStreamWindowCoverOpacity }}>
              <CollectorContainer />
            </Aside>
          </Content>
          <Aside>
            <NavigationBarContainer />
            <Room1v1StreamsContainer />
            <ChatWidgetPC />
          </Aside>
        </Layout>
        <DialogContainer />
        <LoadingContainer />
      </Layout>
      {/* <ExtAppContainer /> */}
      <ExtensionAppContainer />
      <ToastContainer />
      {/* </FixedAspectRatioRootBox> */}
    </Room>
  );
});
