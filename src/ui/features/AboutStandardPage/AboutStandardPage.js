import ContentCard from "../../components/ContentCard";
import marked from "marked";
import aboutStandardPage from "../../../assets/articles/aboutStandardPage";

function AboutStandardPage(props) {
  return (
    <ContentCard title='Normostrana - Čo to je a ako sa počíta' as='article'>
      <div dangerouslySetInnerHTML={{__html: marked(aboutStandardPage)}}/>
    </ContentCard>
  );
}

export default AboutStandardPage;