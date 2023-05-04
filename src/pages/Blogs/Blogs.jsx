import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import BlogCard from "../../components/BlogCard/BlogCard";
import { questionAnswers } from "../../utils/questionAnswer";
import {
  Document,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";
const Blogs = () => {
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    questionStyle: {
      fontSize: 24,
      margin: 12,
    },
    answerStyle: {
      fontSize: 12,
      margin: 10,
    },
  });
  const BlogDocs = () => (
    <Document>
      <Page style={styles.body}>
        {questionAnswers.map(({ question, answer }, index) => (
          <div key={index}>
            <Text style={styles.questionStyle}>{question}</Text>
            <Text style={styles.answerStyle}>{answer}</Text>
          </div>
        ))}
      </Page>
    </Document>
  );

  return (
    <>
      <SectionHeader title="Blogs" />

      <div className="grid grid-cols-1 gap-5 md:px-20">
      {questionAnswers?.map((questionAnswer, index) => (
        <BlogCard key={index} questionAnswer={questionAnswer} />
      ))}
      </div>

      <div className="flex justify-center my-5">
        <PDFDownloadLink document={<BlogDocs />} fileName="blog.pdf">
          {({ loading }) =>
            loading ? (
              <button className="bnt btn-primary">Loading Document...</button>
            ) : (
              <button className="btn btn-primary">Download pdf</button>
            )
          }
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default Blogs;
