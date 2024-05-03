
import Html from "../Assets/html.png";
import reactImage from "../Assets/react.png";
import js from "../Assets/js.png";
import css from "../Assets/css.png";

export const boxes = [
    {
        id: 1,
        title: 'Html',
        content: 'HTML, or Hypertext Markup Language, is the standard language used to create and design documents on the World Wide Web. It provides the structure and layout for web pages by using a system of markup tags and attributes. HTML documents consist of elements, which are defined by tags enclosed in angle brackets. These tags define the structure of the content, such as headings, paragraphs, lists, links, images, and more.',
        image: Html,
    },
    {
        id: 2,
        title: 'Css',
        content: 'CSS, or Cascading Style Sheets, is a style sheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML, etc.). It controls the layout, appearance, and formatting of web pages, enabling developers to style elements such as text, colors, spacing, and positioning.',
        image: css,
    },
    {
        id: 3,
        title: 'Vanilla JavaScript',
        content: 'JavaScript (JS) is a high-level programming language primarily used for adding interactivity and dynamic behavior to web pages. It is one of the core technologies of the World Wide Web along with HTML and CSS. JavaScript is executed by web browsers and can manipulate the content, structure, and behavior of web pages in response to user actions or events.',
        image: js,
    },
    {
        id: 4,
        title: 'React',
        content: 'React.js is a popular JavaScript library for building user interfaces, especially for single-page applications (SPAs) and dynamic web applications. Developed by Facebook, React.js allows developers to create reusable UI components that can be composed together to build complex user interfaces.',
        image: reactImage,
    },
]


export default boxes;


