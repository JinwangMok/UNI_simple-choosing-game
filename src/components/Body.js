import React, { useState, useEffect } from 'react';
import Contents from './Contents';

const Body = () => {
    const [subject, setSubject] = useState({id : 1, class : "전체", selected : true});//selected subject
    const [content, setContent] = useState([]);

    const selectSubject = (subject) => {
        setSubject(subject);
        navSubject.map(nav => subject.id === nav.id? nav.selected = true : nav.selected = false);
        //console.log(subject.class);
        //console.log(subject.selected);
        //console.log(navSubject)
    }
    const selectedContentsData = contentsData.map(content => {
        if(subject.class === "전체"){
            return content;
        }else if (content.subject === subject.class){
            return content;
        }
    })

    return(
        <>
            <ul className="navBar">
                <li className="navBar_search">
                   <img src="/images/search.png" className="navBar_search_icon"/> 
                </li>
                {navSubject.map(s => 
                    <li 
                    key={s.id} 
                    className="navBar_sub" 
                    selected={s.selected} 
                    onClick={() => selectSubject(s)}>{s.class}</li>
                )}
            </ul>
            <Contents subject={subject} contentsData={selectedContentsData}/>
        </>
    );
}

const navSubject = [//전달받아야하는 데이터1
    {id : 1, class : "전체", selected : false},
    {id : 2, class : "음식", selected : false},
    {id : 3, class : "영화", selected : false},
    {id : 4, class : "동물", selected : false}
]

const contentsData = [//전달받아야하는 데이터2
    {
        id : 1,
        subject : "음식",
        title : '오늘은 뭐 먹지? 월드컵',
        roundOf : 32,//4강,
        item : [
            {
                id : 1,
                name : "돼지국밥",
                img : '/images/음식/국밥.jpg',
            },
            {   
                id : 2,
                name : "곱창",
                img : '/images/음식/곱창.jpg',
            },
            {
                id : 3,
                name : "김치찌개",
                img : '/images/음식/김치찌개.jpg',
            },
            {
                id : 4,
                name : "닭갈비",
                img : '/images/음식/닭갈비.jpg',
            },    
            {
                id : 5,
                name : "닭발",
                img : '/images/음식/닭발.jpg',
            },
            {   
                id : 6,
                name : "돈가스",
                img : '/images/음식/돈가스.jpg',
            },
            {
                id : 7,
                name : "된장찌개",
                img : '/images/음식/된장찌개.jpg',
            },
            {
                id : 8,
                name : "떡볶이",
                img : '/images/음식/떡볶이.jpg',
            },     
            {
                id : 9,
                name : "라면",
                img : '/images/음식/라면.jpg',
            },
            {   
                id : 10,
                name : "삼겹살",
                img : '/images/음식/삼겹살.jpg',
            },
            {
                id : 11,
                name : "짜장면",
                img : '/images/음식/짜장면.jpg',
            },
            {
                id : 12,
                name : "초밥",
                img : '/images/음식/초밥.jpg',
            },     
            {
                id : 13,
                name : "치킨",
                img : '/images/음식/치킨.jpg',
            },
            {   
                id : 14,
                name : "피자",
                img : '/images/음식/피자.jpg',
            },
            {
                id : 15,
                name : "햄버거",
                img : '/images/음식/햄버거.jpg',
            },
            {
                id : 16,
                name : "회",
                img : '/images/음식/회.jpg',
            },
            {
                id : 17,
                name : "족발",
                img : '/images/음식/족발.jpg',
            },
            {   
                id : 18,
                name : "조개구이",
                img : '/images/음식/조개구이.jpg',
            },
            {
                id : 19,
                name : "양꼬치",
                img : '/images/음식/양꼬치.jpg',
            },
            {
                id : 20,
                name : "삼계탕",
                img : '/images/음식/삼계탕.jpg',
            },    
            {
                id : 21,
                name : "파스타",
                img : '/images/음식/파스타.jpg',
            },
            {   
                id : 22,
                name : "제육볶음",
                img : '/images/음식/제육볶음.jpg',
            },
            {
                id : 23,
                name : "오리고기",
                img : '/images/음식/오리고기.jpg',
            },
            {
                id : 24,
                name : "짬뽕",
                img : '/images/음식/짬뽕.jpg',
            },     
            {
                id : 25,
                name : "물냉면",
                img : '/images/음식/냉면.jpg',
            },
            {   
                id : 26,
                name : "비빔냉면",
                img : '/images/음식/비빔냉면.jpg',
            },
            {
                id : 27,
                name : "간장게장",
                img : '/images/음식/간장게장.jpg',
            },
            {
                id : 28,
                name : "해신탕",
                img : '/images/음식/해신탕.jpg',
            },     
            {
                id : 29,
                name : "훠궈",
                img : '/images/음식/훠궈.jpg',
            },
            {   
                id : 30,
                name : "육회",
                img : '/images/음식/육회.jpg',
            },
            {
                id : 31,
                name : "대게찜",
                img : '/images/음식/대게찜.jpeg',
            },
            {
                id : 32,
                name : "돼지껍데기",
                img : '/images/음식/돼지껍데기.jpg',
            }          
        ]
    }, 
    {
        id : 2,
        subject : "영화",
        title : '썸타는 사람과 같이 보고 싶은 영화 월드컵',
        roundOf : 32,
        item : [
            {
                id : 1,
                name : "러브,로지",
                img : '/images/영화/러브로지.jpg',
            },
            {
                id : 2,
                name : "가장 보통의 연애",
                img : '/images/영화/가장보통의연애.jpg',
            },
            {
                id : 3,
                name : "그시절, 우리가 좋아했던 소녀",
                img : '/images/영화/그시절,우리가좋아했던소녀.jpg',
            },
            {
                id : 4,
                name : "나의 소녀시대",
                img : '/images/영화/나의소녀시대.jpg',
            },   
            {
                id : 5,
                name : "노팅힐",
                img : '/images/영화/노팅힐.jpg',
            },
            {
                id : 6,
                name : "라라랜드",
                img : '/images/영화/라라랜드.jpg',
            },
            {
                id : 7,
                name : "러브액츄얼리",
                img : '/images/영화/러브액츄얼리.jpg',
            },
            {
                id : 8,
                name : "미비포유",
                img : '/images/영화/미비포유.jpg',
            },   
            {
                id : 9,
                name : "뷰티인사이드",
                img : '/images/영화/뷰티인사이드.jpg',
            },
            {
                id : 10,
                name : "비포 선 라이즈",
                img : '/images/영화/비포선라이즈.jpg',
            },
            {
                id : 11,
                name : "어바웃타임",
                img : '/images/영화/어바웃타임.jpg',
            },
            {
                id : 12,
                name : "원데이",
                img : '/images/영화/원데이.jpg',
            },   {
                id : 13,
                name : "이터널선샤인",
                img : '/images/영화/이터널선샤인.jpg',
            },
            {
                id : 14,
                name : "이프온리",
                img : '/images/영화/이프온리.jpg',
            },
            {
                id : 15,
                name : "인터스텔라",
                img : '/images/영화/인터스텔라.jpg',
            },
            {
                id : 16,
                name : "플립",
                img : '/images/영화/플립.jpg',
            },
            {
                id : 17,
                name : "트라이앵글",
                img : '/images/영화/트라이앵글.jpeg',
            },
            {
                id : 18,
                name : "타임 패러독스",
                img : '/images/영화/타임패러독스.jpg',
            },
            {
                id : 19,
                name : "업",
                img : '/images/영화/업.jpg',
            },
            {
                id : 20,
                name : "아메리칸셰프",
                img : '/images/영화/아메리칸셰프.jpg',
            },   
            {
                id : 21,
                name : "레옹",
                img : '/images/영화/레옹.jpg',
            },
            {
                id : 22,
                name : "보헤미안랩소디",
                img : '/images/영화/보헤미안랩소디.jpg',
            },
            {
                id : 23,
                name : "기생충",
                img : '/images/영화/기생충.jpeg',
            },
            {
                id : 24,
                name : "미녀와야수",
                img : '/images/영화/미녀와야수.jpg',
            },   
            {
                id : 25,
                name : "비긴어게인",
                img : '/images/영화/비긴어게인.jpg',
            },
            {
                id : 26,
                name : "안녕나의소녀",
                img : '/images/영화/안녕나의소녀.jpg',
            },
            {
                id : 27,
                name : "미드나잇선",
                img : '/images/영화/미드나잇선.jpg',
            },
            {
                id : 28,
                name : "오늘의연애",
                img : '/images/영화/오늘의연애.jpg',
            },   
            {
                id : 29,
                name : "너와 100번째 사랑",
                img : '/images/영화/너와100번째사랑.jpg',
            },
            {
                id : 30,
                name : "노트북",
                img : '/images/영화/노트북.jpg',
            },
            {
                id : 31,
                name : "너의결혼식",
                img : '/images/영화/너의결혼식.jpg',
            },
            {
                id : 32,
                name : "컨저링",
                img : '/images/영화/컨저링.jpg',
            }
        ]
    },
    {
        id : 3,
        subject : "동물",
        title : '인생에서 한번쯤 키워보고 싶은 동물 월드컵',
        roundOf : 32,
        item : [
            {
                id : 1,
                name : "강아지",
                img : '/images/동물/강아지.jpg',
            },
            {
                id : 2,
                name : "고양이",
                img : '/images/동물/고양이.png',
            },
            {
                id : 3,
                name : "고슴도치",
                img : '/images/동물/고슴도치.jpg',
            },
            {
                id : 4,
                name : "곰",
                img : '/images/동물/곰.jpg',
            },  
            {
                id : 5,
                name : "레서판다",
                img : '/images/동물/레서판다.jpg',
            },
            {
                id : 6,
                name : "미어캣",
                img : '/images/동물/미어캣.jpg',
            },
            {
                id : 7,
                name : "뱀",
                img : '/images/동물/뱀.jpg',
            },
            {
                id : 8,
                name : "병아리",
                img : '/images/동물/병아리.jpg',
            },  
            {
                id : 9,
                name : "사막여우",
                img : '/images/동물/사막여우.jpg',
            },
            {
                id : 10,
                name : "수달",
                img : '/images/동물/수달.PNG',
            },
            {
                id : 11,
                name : "앵무새",
                img : '/images/동물/앵무새.jpg',
            },
            {
                id : 12,
                name : "치타",
                img : '/images/동물/치타.jpg',
            },  
            {
                id : 13,
                name : "친칠라",
                img : '/images/동물/친칠라.jpg',
            },
            {
                id : 14,
                name : "토끼",
                img : '/images/동물/토끼.jpg',
            },
            {
                id : 15,
                name : "페럿",
                img : '/images/동물/페럿.jpg',
            },
            {
                id : 16,
                name : "햄스터",
                img : '/images/동물/햄스터.jpg',
            },
            {
                id : 17,
                name : "사자",
                img : '/images/동물/사자.jpg',
            },
            {
                id : 18,
                name : "삵",
                img : '/images/동물/삵.jpg',
            },
            {
                id : 19,
                name : "수달",
                img : '/images/동물/수달.png',
            },
            {
                id : 20,
                name : "슈가글라이더",
                img : '/images/동물/슈가글라이더.jpg',
            },  
            {
                id : 21,
                name : "알파카",
                img : '/images/동물/알파카.jpg',
            },
            {
                id : 22,
                name : "앵무새",
                img : '/images/동물/앵무새.jpg',
            },
            {
                id : 23,
                name : "왈라비",
                img : '/images/동물/왈라비.jpg',
            },
            {
                id : 24,
                name : "우파루파",
                img : '/images/동물/우파루파.jpg',
            },  
            {
                id : 25,
                name : "쿼카",
                img : '/images/동물/쿼카.jpg',
            },
            {
                id : 26,
                name : "매",
                img : '/images/동물/매.jpg',
            },
            {
                id : 27,
                name : "말",
                img : '/images/동물/말.png',
            },
            {
                id : 28,
                name : "태즈매니아데블",
                img : '/images/동물/태즈매니아데블.jpg',
            },  
            {
                id : 29,
                name : "라마",
                img : '/images/동물/라마.jpeg',
            },
            {
                id : 30,
                name : "거북이",
                img : '/images/동물/거북이.jpg',
            },
            {
                id : 31,
                name : "독수리",
                img : '/images/동물/독수리.jpg',
            },
            {
                id : 32,
                name : "햄스터",
                img : '/images/동물/햄스터.jpg',
            },
        ]
    },
]

export default Body;