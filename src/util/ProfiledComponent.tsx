// ProfiledComponent.jsx
import { Profiler } from 'react';

const ProfiledComponent = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const handleRender: React.ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(`[Profiler ${id}]`, {
      phase,
      actualDuration: `${actualDuration.toFixed(2)}ms`,
      baseDuration: `${baseDuration.toFixed(2)}ms`,
      timing: `${(commitTime - startTime).toFixed(2)}ms`
    });
  };

  return (
    <Profiler id={id} onRender={handleRender}>
      {children}
    </Profiler>
  );
};

export default ProfiledComponent;