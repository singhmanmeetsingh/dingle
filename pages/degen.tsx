import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = function () {
  return {
    props: {
      name: "My name is Manmeet",
    //   renderedAt: new Date(), // it doesn;t do object it's JSON searliazable
    },
  };
};
// this is the functions that it use
// anything i Put here goes to the client if it is json seralized.
// 
// server side props are called it goes to document.tsx file then it does to serverside props then goes to app.tsx file 
export default function foo(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  console.log(props.name);
  return <div>Hello, degens</div>;
}
// server side rendering of the page
// gennerates the pages from backend HTML with scripts.
// no fancy scripts that runs on the page like client side react
// consoles on CLI
// generate HTML for the user "2 on the client"
// logs on server
// react when there are intrupted the connection (writing your effect in a way there are)
// react like to re-render in dev mode just to check if the component doesn't breaks
// react handle renders when the lot of effect the effects have cleanup so that every renders check
// web worker: is for parellel
// segment for google analytics in webworkers
// webworkers dont interfere with UI
// response assume the data that page needs not at component level
// php enable us productive wise
// trpc is need alt of getserverside props