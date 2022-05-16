import SimpleReactFooter from "simple-react-footer";
import "./footer.css";
export default function Testfooter(){
  const description = "Morocco is rich in monuments. This is a school project in EMI for XML usage";
  const title = "Monument Bladi";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    
    
 ];
 return (<SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="black"
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"
 />);
};