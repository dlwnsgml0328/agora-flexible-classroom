import { FC, useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import { RootBox } from '~ui-kit';
import { useClassroomStyle, useInitialize } from './hooks';
import { useStore } from '@/infra/hooks/use-edu-stores';

type FixedAspectRatioProps = {
  minimumWidth?: number;
  minimumHeight?: number;
  trackMargin?: Partial<{ top: number }>;
  trackResize?: Partial<{
    minHeight: number;
    minWidth: number;
    maxHeight: number;
    maxWidth: number;
  }>;
  children?: React.ReactNode;
};

const FixedAspectRatioContainer: React.FC<FixedAspectRatioProps> = observer(
  ({ children, minimumWidth = 0, minimumHeight = 0 }) => {
    const style = useClassroomStyle({ minimumHeight, minimumWidth });

    const { shareUIStore } = useStore();

    return (
      <div className="flex bg-black justify-center items-center h-screen w-screen">
        <div
          style={style}
          className={`w-full h-full relative ${shareUIStore.classroomViewportClassName}`}>
          {children}
        </div>
      </div>
    );
  },
);
