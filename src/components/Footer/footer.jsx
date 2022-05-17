import SimpleReactFooter from "simple-react-footer";
import "./footer.css";
export default function Testfooter(){
  const description = "Morocco is rich in monuments. This is a school project in EMI for XML usage";
  const title = "Monument Bladi";
  const columns = [];
 return (<SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"  
    copyright="MonumentBladi"
    iconColor="black"
    backgroundColor="white"
    fontColor="black"
    copyrightColor="darkgrey"
 />);
};