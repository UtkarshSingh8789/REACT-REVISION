// THEORY-> **Prop drilling** occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:
// - **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
// - **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.

function LightBulb({ isLightOn }) {
  return <div>The light is {isLightOn ? 'ON' : 'OFF'}</div>;
}

function LightSwitch({setIsLightOn }) {
  return (
    <div>
      <button onClick={() => setIsLightOn(prev => !prev)}>SWITCH</button>
    </div>
  );
}

export { LightBulb, LightSwitch };

// extra rerendering -> we have to minimize rerendering so we have to study about context api;
