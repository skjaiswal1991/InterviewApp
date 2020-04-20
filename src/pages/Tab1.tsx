import React from 'react';
import { IonContent, IonHeader,IonCard,IonItem,IonIcon,IonLabel,IonButton,IonSearchbar, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { RouteComponentProps } from "react-router-dom";
import './Tab1.css';
import content from "../service/content.json";
// // "https://image.flaticon.com/icons/png/512/919/919830.png",
// "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/wordpress-512.png",
// "https://friconix.com/png/fi-cnsuxx-codeigniter.png",
// "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/magento-512.png"
const catimg = content.catimg;
class Tab1 extends React.Component<RouteComponentProps>{

  constructor(props:any){
   super(props);
   console.log(catimg);
  
  }

  quhendler = () =>{
    console.log(this.props);

    const { history } = this.props;
    history.push('/question');

  }

  setSearchText = () =>{

  }
  render(){
         return (
           <IonPage>
            <IonSearchbar value="" onIonChange={e => this.setSearchText()}></IonSearchbar>
             <IonContent>
               
               {/* <ExploreContainer name="Tab 1 page" /> */}
             
               <IonGrid>
                   <IonRow>
                     {catimg.map((cat:any, i:any)=>(
                       
                        <IonCol key={i} size="6" onClick={this.quhendler}>
                            <IonCard>
                              <IonItem>
                                <img src={cat.img}></img>
                              </IonItem>

                          </IonCard>
                      </IonCol >
                     ))}
                       
                       
                   </IonRow>
               </IonGrid>

             </IonContent>
           </IonPage>
         );
  }

}

export default Tab1;
