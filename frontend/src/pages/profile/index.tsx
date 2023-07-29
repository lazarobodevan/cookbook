import { useContext, useEffect, useState } from 'react';
import Divisor from '../../components/divisor';
import styles from './Profile.module.scss'
import BaseCard from './base-card';
import PeopleYouFollowItem from './people-you-follow-item';
import YourCommentItem from './your-comments-item';
import YourLikesItem from './your-likes-item';
import YourRecipesItem from './your-recipes-item';
import { Comment } from '../../types/Comment';
import { Recipe } from '../../types/Recipe';
import userService from '../../services/userService';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { User } from '../../types/User';
import Button from '../../components/button';

export default function Profile(){

    const [user, setUser] = useState<User>()

    const auth = useContext(AuthContext);

    useEffect(()=>{
        const getProfile = async() =>{
            const profile = await userService.getProfile(auth.user!.id);
            setUser(profile);
            console.log(user?.comments)
        };
        getProfile();
    },[])

    return(

        <section className={styles.content}>
            <BaseCard title='Pessoas que você segue *mockado*' flexDirection='row' flexWrap='wrap'>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
                <PeopleYouFollowItem/>
            </BaseCard>

            <BaseCard title='Suas receitas'>
                {user?.recipes?.map(item=>{
                    return <YourRecipesItem name={item.name} date={item._createdAt} key={item.id}/>
                })}

            </BaseCard>

            <BaseCard title='Suas curtidas'>
                {user?.likes?.map(item=>{
                    return <YourLikesItem recipeName={item.name} date={item._createdAt} userName={item.user!.name} key={item.id}/>
                })}
            </BaseCard>

            <BaseCard title='Seus comentários'>
                {user?.comments?.map(item =>{
                    return <YourCommentItem comment={item.comment} recipeName={item.recipe!.name} date={item._createdAt} userName={item.user!.name} key={item.id}/>
                })}
            </BaseCard>

            <Button text='Sair' onClick={auth.logout}/>
            
            
        </section>
    );
}