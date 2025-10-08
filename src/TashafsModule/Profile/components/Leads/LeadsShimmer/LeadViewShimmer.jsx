import Skeleton from 'react-loading-skeleton'
import React from 'react'
import styles from './LeadViewShimmer.module.scss'
export const LeadViewShimmer = () => {
    return (
        <div className={styles.skeleton_wrapper}>
            <div >
                <Skeleton baseColor="#242939" highlightColor="#D6DAE5" className={styles.headerLinvisible} width={349} height={3} />     
            </div>
            <div className={styles.skeleton_sub_container}>
                <div className={styles.circle_style} >
                    <div>
                        <Skeleton circle width={30} height={30} baseColor='#242939' highlightColor="#D6DAE5" />
                        <div className={styles.line1}>
                            <Skeleton borderRadius={40} width={78} height={11} 
                            baseColor='#242939' highlightColor="#D6DAE5" />
                        </div>
                        <div className={styles.line2}>
                            <Skeleton borderRadius={40} width={114} height={7} 
                            baseColor='#242939' highlightColor="#D6DAE5" />
                        </div>
                    </div>
                </div>
                <div className={styles.line3}>
                        <Skeleton className={styles.border_skel} baseColor ='#242939' borderRadius={20} width={52} height={33} 
                         highlightColor="#D6DAE5" />
                    </div>
                <div>
                    <div className={styles.line_Wrapper}>
                        <div className={styles.big_line}>
                            <Skeleton borderRadius={40} width={224} height={17} baseColor='#242939' highlightColor="#D6DAE5" />
                        </div>
                        <div className={styles.Big_line2}>
                            <Skeleton borderRadius={40} width={251} height={17} baseColor='#242939' highlightColor="#D6DAE5" />
                        </div>
                        <div className={styles.Big_line3}>
                            <Skeleton borderRadius={40} width={328} height={7} baseColor='#242939' highlightColor="#D6DAE5" />
                            <Skeleton borderRadius={40} width={328} height={7} baseColor='#242939' highlightColor="#D6DAE5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



