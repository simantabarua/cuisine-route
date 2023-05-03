import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import BlogCard from "../../components/BlogCard/BlogCard";
import {
  Document,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
const Blogs = () => {
  const questionAnswers = [
    {
      question:
        "Tell us the differences between uncontrolled and controlled components.",
      answer:
        "Uncontrolled components are components that have their state managed by the DOM, while controlled components are components that have their state managed by React. In uncontrolled components, the state is managed by the DOM and accessed using refs, while in controlled components, the state is managed by React and accessed using props and state.",
    },
    {
      question: "How to validate React props using PropTypes",
      answer:
        "PropTypes is a package that allows you to specify the type of each prop that your component expects. You can use PropTypes to validate that the props passed to your component are of the correct type. PropTypes can help you to catch errors early and provide better documentation for your components.",
    },
    {
      question: "Tell us the difference between nodejs and express js.",
      answer:
        "Node.js is a runtime environment for executing JavaScript code outside of a web browser. Express.js is a web application framework built on top of Node.js. Express.js makes it easier to build web applications by providing a set of features and utilities for handling HTTP requests and responses, managing sessions, and integrating with databases and other services.",
    },
    {
      question: "What is a custom hook, and why will you create a custom hook?",
      answer:
        "A custom hook is a function that uses the React Hooks API to provide some shared functionality that can be reused across multiple components. Custom hooks allow you to extract and reuse logic that would otherwise be duplicated across multiple components. You might create a custom hook to manage the state of a form, fetch data from an API, or integrate with a third-party library.",
    },
  ];
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    answer: {
      fontSize: 24,
      margin: 12,
    },
    answer: {
      fontSize: 12,
      marginBottom: 40,
    },
  });
  const MyDoc = () => (
    <Document>
      <Page style={styles.body}>
        {questionAnswers.map(({ question, answer }, index) => (
          <div key={index}>
            <Text style={styles.question}>{question}</Text>
            <Text style={styles.answer}>{answer}</Text>
          </div>
        ))}
      </Page>
    </Document>
  );

  return (
    <>
      <SectionHeader title="Blogs" />
      <PDFDownloadLink document={<MyDoc />} fileName="blog.pdf">
        {({ loading }) =>
          loading ? (
            <button className="bnt btn-primary">Loading Document...</button>
          ) : (
            <button className="btn btn-primary">Download pdf</button>
          )
        }
      </PDFDownloadLink>
      {questionAnswers?.map((questionAnswer, index) => (
        <BlogCard key={index} questionAnswer={questionAnswer} />
      ))}
    </>
  );
};

export default Blogs;
