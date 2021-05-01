import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../../components/Layout'
import BotNavigation from '../../../components/Navigation/BotNavigation'
import TopNavigation from '../../../components/Navigation/TopNavigation'
import InforUserBox from '../../../components/pages/Profile/InforUserBox'
import LikesBox from '../../../components/pages/Profile/LikesBox'
import PostsBox from '../../../components/pages/Profile/PostsBox'
import UncheckedPostsBox from '../../../components/pages/Profile/UncheckedPostsBox'
import changeDateFormat from '../../../tools/changeDateFormat'
import { loadPosts, loadUncheckedPosts } from '../UserSlice'



const useStyles = makeStyles(theme => ({


}))





function PageProfile() {
    const classes = useStyles()
    const { photoURL, displayName, email, phoneNumber, joinDate } = useSelector(state => state.auth.user)

    const list  = useSelector(state => state.market.list)
    const likes = useSelector(state => state.user.likes)
    const filteredLikes = [...list].filter(({id}) => likes.indexOf(id) > -1)


    const posts = useSelector(state => state.user.posts)
    const uncheckedPosts = useSelector(state => state.user.uncheckedPosts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
        dispatch(loadUncheckedPosts())
    },[])




    return (
        <div className={classes.root}>
            <TopNavigation userName={displayName} adminCondition={email === process.env.REACT_APP_ADMIN}/>


            <Layout numberGrid={10} breakPoint="md" >

                <InforUserBox
                    avatar={photoURL}
                    name={displayName}
                    likes={likes.length}
                    posts={posts.length}
                    email={email}
                    phoneNumber={phoneNumber}
                    date={changeDateFormat(joinDate)}
                />


                <UncheckedPostsBox posts={uncheckedPosts}/>

                <PostsBox posts={posts}/>

                <LikesBox likes={filteredLikes} />
                

                <BotNavigation page={2} adminCondition={email === process.env.REACT_APP_ADMIN}/>

            </Layout>


        </div>
    )
}

export default PageProfile
