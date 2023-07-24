import Divisor from '../../components/divisor';
import styles from './Profile.module.scss'
import BaseCard from './base-card';
import PeopleYouFollowItem from './people-you-follow-item';
import YourCommentItem from './your-comments-item';
import YourLikesItem from './your-likes-item';
import YourRecipesItem from './your-recipes-item';

export default function Profile(){
    return(

        <section className={styles.content}>
            <BaseCard title='Pessoas que você segue' flexDirection='row' flexWrap='wrap'>
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
                <YourRecipesItem/>
                <YourRecipesItem/>
                <YourRecipesItem/>
                <YourRecipesItem/>
                <YourRecipesItem/>
                <YourRecipesItem/>
                <YourRecipesItem/>
                <YourRecipesItem/>
            </BaseCard>

            <BaseCard title='Suas curtidas'>
                <YourLikesItem/>
                <YourLikesItem/>
                <YourLikesItem/>
                <YourLikesItem/>
                <YourLikesItem/>
                <YourLikesItem/>
                <YourLikesItem/>
            </BaseCard>

            <BaseCard title='Seus comentários'>
                <YourCommentItem/>
                <YourCommentItem/>
                <YourCommentItem/>
                <YourCommentItem/>
                <YourCommentItem/>
                <YourCommentItem/>
                <YourCommentItem/>
                <YourCommentItem/>
            </BaseCard>
            
            
        </section>
    );
}