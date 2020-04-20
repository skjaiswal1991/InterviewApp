import React from 'react';

import Collapsible from 'react-collapsible';
import { IonContent, IonHeader,IonButtons,IonIcon, IonPage, IonTitle, IonToolbar,IonGrid,IonRow,IonCol } from '@ionic/react';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import content from "../service/content.json";
import { arrowBack,musicalNotes,play, logOut } from 'ionicons/icons';
import { RouteComponentProps } from "react-router-dom";
const category = content.category;


class Question extends React.Component<RouteComponentProps>{

   constructor(props:any){
    super(props);
      console.log(props);
      this.state = {id:props.match.params.id}
   }
   
   goBack = () => {
    const { history } = this.props;
    history.goBack();

   }
   startspeach = (data: any) =>{
    TextToSpeech.speak(data)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
   }
   render(){
          return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButtons slot="start" style={{ fontSize: '25' + 'px' }}  >
                                {/* <IonBackButton text="" icon={arrowBack} defaultHref="/profile"  /> */}
                                <IonIcon icon={arrowBack} onClick={() => this.goBack()} />
                            </IonButtons>
                        </IonButtons>
                        <p className="profileInfoTitle ion-padding-horizontal" >Account Settings</p>
                    </IonToolbar>
                </IonHeader>
              <IonContent>
                
                {/* <ExploreContainer name="Tab 1 page" /> */}
              
                <IonGrid>
                    <IonRow>
                        <IonCol>
                         
                          {category.map((cate:any,i: any)=>(
                            <>
                             
                              <Collapsible key={i} trigger={cate.question}>
                                {cate.answer}
                                    
                              </Collapsible>
                            </>
                          ))}
                          
                        </IonCol>
                    </IonRow>
                </IonGrid>

              </IonContent>
            </IonPage>
          );
   }

}

export default Question;