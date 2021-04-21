// Wrapper is not rendered in the DOM -> faster rendering
// workaround for the JSX where we have to return only one thing
// and workaround for the <div> soup problem

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
