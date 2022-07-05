import { Aside, Content, Layout } from '~components/layout';
import { observer } from 'mobx-react';
import classnames from 'classnames';
import { NavigationBarContainer } from '~containers/nav';
import { DialogContainer } from '~containers/dialog';
import { LoadingContainer } from '~containers/loading';
import Room from '../room';
import { RoomMidStreamsContainer } from '~containers/stream/room-mid-player';
import { FixedAspectRatioRootBox } from '~containers/root-box';
import { ChatWidgetPC } from '~containers/widget/chat-widget';
import { ExtensionAppContainer } from '~containers/extension-app-container';
import { ToastContainer } from '~containers/toast';
import { HandsUpContainer } from '~containers/hand-up';
import { SceneSwitch } from '~containers/scene-switch';
import { Award } from '../../containers/award';
import { BigWidgetWindowContainer } from '../../containers/big-widget-window';

export const MidClassScenario = observer(() => {
  // layout
  const layoutCls = classnames('edu-room', 'mid-class-room');

  return (
    <Room>
      <FixedAspectRatioRootBox
        minimumWidth={window.document.body.clientWidth}
        minimumHeight={window.document.body.clientHeight}
        trackMargin={{ top: 27 }}>
        <SceneSwitch>
          <Layout className={layoutCls} direction="col">
            <Layout className="horizontal">
              <Content className="content-for-immsi">
                <div style={{ width: '100%' }}>
                  <iframe
                    style={{ width: '100%', height: '100%' }}
                    src="https://eazel.net/"></iframe>
                </div>
              </Content>
              <Aside>
                <NavigationBarContainer />
                <>
                  <RoomMidStreamsContainer />
                  <BigWidgetWindowContainer />
                </>
                <HandsUpContainer />
                <ChatWidgetPC />
              </Aside>
            </Layout>

            <DialogContainer />
            <LoadingContainer />
          </Layout>
          <ExtensionAppContainer />
          <ToastContainer />
          <Award />
        </SceneSwitch>
      </FixedAspectRatioRootBox>
    </Room>
  );
});

/**
 * SceneSwitch - The component for switching between scense
 * ScenesController - The component for controlling whiteboard scense, such as adding or deleting whiteboard pages
 * **Stream - The component for rendering audio and video streams
 * Tool
 * */
