import React from 'react';
import Collapsible from 'react-collapsible';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import content from "../service/content.json";

const category = content.category;
class Tab2 extends React.Component{

   constructor(props:any){
    super(props);
   }
   render(){
          return (
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <IonHeader collapse="condense">
                  <IonToolbar>
                    <IonTitle size="large">Tab 1</IonTitle>
                  </IonToolbar>
                </IonHeader>
                {/* <ExploreContainer name="Tab 1 page" /> */}
              
                <IonGrid>
                    <IonRow>
                        <IonCol>
                          {category.map((cate:any)=>(
                            
                              <Collapsible trigger={cate}>
                                <p>This is the collapsible content. It can be any element or React component you like.</p>
                                <p>It can even be another Collapsible component. Check out the next section!</p>
                            </Collapsible>
                          ))}
                          
                        </IonCol>
                    </IonRow>
                </IonGrid>

              </IonContent>
            </IonPage>
          );
   }

}

export default Tab2;