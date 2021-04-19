import React, {useState, useEffect} from 'react'
import Pages from './pages'

function App(){
    
    // const data = {"basics":{"name":"Trey Huffine","picture":"https://avatars3.githubusercontent.com/u/11709986?v=4","label":"Building gitconnected.com","headline":"Passionate for open source technology","summary":"After a career change into software engineering in my mid 20's, I've experienced first-hand how much work it requires to get involved and be successful. My passion is to help everyone build their career as a developer and teach the required skills to be a contributor on an engineering team.\n\nI ❤️ TypeScript/JavaScript, React, GraphQL, Go","website":"http://treyhuffine.com","blog":"https://levelup.gitconnected.com","yearsOfExperience":5,"id":"3641e126-f5e4-4478-b881-ee735dd2dbf1","username":"treyhuffine","karma":314,"email":null,"region":"Austin, TX","location":{},"phone":null,"followers":770,"following":95,"profiles":[{"network":"gitconnected","username":"treyhuffine","url":"https://gitconnected.com/treyhuffine"},{"network":"GitHub","username":"treyhuffine","url":"https://github.com/treyhuffine"},{"network":"Twitter","url":"https://twitter.com/treyhuffine","username":"treyhuffine"},{"network":"LinkedIn","url":"https://www.linkedin.com/in/treyhuffine","username":"treyhuffine"},{"network":"Medium","url":"https://medium.com/@treyhuffine","username":"@treyhuffine"},{"network":"AngelList","url":"https://angel.co/trey-huffine","username":"trey-huffine"}]},"skills":[{"name":"JavaScript","level":"Advanced","rating":4,"yearsOfExperience":5,"keywords":[]},{"name":"TypeScript","level":"Intermediate","rating":3,"yearsOfExperience":2,"keywords":[]},{"name":"React","level":"Advanced","rating":4,"yearsOfExperience":4,"keywords":[]},{"name":"Go","level":"Beginner","rating":2,"yearsOfExperience":1,"keywords":[]}],"projects":[{"name":"portfolio-create-react-app","displayName":"portfolio-create-react-app","summary":"How to build a developer portfolio using React","website":"","githubUrl":"https://github.com/treyhuffine/portfolio-create-react-app","primaryLanguage":"JavaScript","languages":["HTML","JavaScript","CSS"],"libraries":[],"images":[],"videos":[]},{"name":"hacker-news-reader","displayName":"hacker-news-reader","summary":"Hacktoberfest project to build a Hacker News clone","website":"https://gitconnected.com/hacktoberfest","githubUrl":"https://github.com/treyhuffine/hacker-news-reader","primaryLanguage":"JavaScript","languages":["JavaScript"],"libraries":["React","Redux","Styled Components"],"images":[{"resolutions":{"micro":{"url":"https://project-images.gitconnectedcontent.com/05a80c0b-3d9b-48bd-867f-de15d72096c9-micro","size":1248,"width":32,"height":17},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/05a80c0b-3d9b-48bd-867f-de15d72096c9-thumbnail","size":6502,"width":224,"height":122},"mobile":{"url":"https://project-images.gitconnectedcontent.com/05a80c0b-3d9b-48bd-867f-de15d72096c9-mobile","size":22835,"width":600,"height":327},"desktop":{"url":"https://project-images.gitconnectedcontent.com/05a80c0b-3d9b-48bd-867f-de15d72096c9-desktop","size":63157,"width":1200,"height":655}}},{"resolutions":{"micro":{"url":"https://project-images.gitconnectedcontent.com/0548096a-b63e-487a-ab1e-9af9ce4e19d4-micro","size":563,"width":32,"height":17},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/0548096a-b63e-487a-ab1e-9af9ce4e19d4-thumbnail","size":5925,"width":224,"height":122},"mobile":{"url":"https://project-images.gitconnectedcontent.com/0548096a-b63e-487a-ab1e-9af9ce4e19d4-mobile","size":24549,"width":600,"height":328},"desktop":{"url":"https://project-images.gitconnectedcontent.com/0548096a-b63e-487a-ab1e-9af9ce4e19d4-desktop","size":62641,"width":1200,"height":656}}},{"resolutions":{"micro":{"url":"https://project-images.gitconnectedcontent.com/a8935fa8-3009-444c-aa23-bdb66a513a6a-micro","size":433,"width":32,"height":18},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/a8935fa8-3009-444c-aa23-bdb66a513a6a-thumbnail","size":5595,"width":224,"height":123},"mobile":{"url":"https://project-images.gitconnectedcontent.com/a8935fa8-3009-444c-aa23-bdb66a513a6a-mobile","size":24202,"width":600,"height":329},"desktop":{"url":"https://project-images.gitconnectedcontent.com/a8935fa8-3009-444c-aa23-bdb66a513a6a-desktop","size":63645,"width":1200,"height":658}}}],"videos":[{"url":"https://www.youtube.com/watch?v=oGB_VPrld0U","source":"youtube","sourceId":"oGB_VPrld0U"}]},{"name":"graphql-react-typescript-spacex","displayName":"graphql-react-typescript-spacex","summary":"","website":"","githubUrl":"https://github.com/treyhuffine/graphql-react-typescript-spacex","primaryLanguage":"TypeScript","languages":["HTML","TypeScript","CSS"],"libraries":[],"images":[],"videos":[]},{"name":"lightbox-react","displayName":"lightbox-react","summary":"Lightbox for components or images built for React","website":"http://treyhuffine.com/lightbox-react/","githubUrl":"https://github.com/treyhuffine/lightbox-react","primaryLanguage":"JavaScript","languages":["JavaScript"],"libraries":["React"],"images":[{"resolutions":{"micro":{"url":"https://project-images.gitconnectedcontent.com/e7cb76e7-bbd8-4cbf-93c6-a67ef1db918e-micro","size":1289,"width":32,"height":18},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/e7cb76e7-bbd8-4cbf-93c6-a67ef1db918e-thumbnail","size":12122,"width":224,"height":123},"mobile":{"url":"https://project-images.gitconnectedcontent.com/e7cb76e7-bbd8-4cbf-93c6-a67ef1db918e-mobile","size":58020,"width":600,"height":329},"desktop":{"url":"https://project-images.gitconnectedcontent.com/e7cb76e7-bbd8-4cbf-93c6-a67ef1db918e-desktop","size":154677,"width":1200,"height":658}}},{"resolutions":{"micro":{"url":"https://project-images.gitconnectedcontent.com/f7bf67b3-3cd5-4048-aedc-0a99dc15b05c-micro","size":1140,"width":32,"height":18},"thumbnail":{"url":"https://project-images.gitconnectedcontent.com/f7bf67b3-3cd5-4048-aedc-0a99dc15b05c-thumbnail","size":6272,"width":224,"height":123},"mobile":{"url":"https://project-images.gitconnectedcontent.com/f7bf67b3-3cd5-4048-aedc-0a99dc15b05c-mobile","size":28192,"width":600,"height":330},"desktop":{"url":"https://project-images.gitconnectedcontent.com/f7bf67b3-3cd5-4048-aedc-0a99dc15b05c-desktop","size":84984,"width":1200,"height":661}}}],"videos":[{"url":"https://www.youtube.com/watch?v=5dsGWM5XGdg","source":"youtube","sourceId":"5dsGWM5XGdg"}]},{"name":"is-react","displayName":"is-react","summary":"Determine if a variable or statement is a React element or component","website":"","githubUrl":"https://github.com/treyhuffine/is-react","primaryLanguage":"JavaScript","languages":["JavaScript"],"libraries":["React"],"images":[],"videos":[]}],"work":[{"company":"Postmates","position":"Software Engineer","website":"https://postmates.com","location":"San Francisco, CA","summary":"Software engineer for both the growth and consumer teams. Building an industry-leading customer experience in local delivery using Go, React, Redux, GraphQL, and TypeScript/JavaScript.","isCurrentRole":false,"startDate":"2016-11-01","endDate":"2019-10-01","start":{"year":2016,"month":11},"end":{"year":2019,"month":10},"highlights":[]},{"company":"GrubMarket","position":"Vice President of Engineering","website":"https://grubmarket.com","location":"San Francisco, CA","summary":"Lead engineer generating rapid company growth by receiving both series A and B funding within a year. Managed a team of 12 engineers with an application on the web, iOS, and Android platforms. Also held roles as director of frontend engineering and frontend engineer.","isCurrentRole":false,"startDate":"2015-08-01","endDate":"2016-11-01","start":{"year":2015,"month":8},"end":{"year":2016,"month":11},"highlights":[]}],"publications":[],"education":[{"institution":"CodingHouse","area":"Web Development","studyType":"Bootcamp","startDate":"2015-05-01","endDate":"2015-08-01","start":{"year":2015,"month":5},"end":{"year":2015,"month":8},"description":"A coding boot camp focused on JavaScript and full-stack web development","activities":"","gpa":"","courses":[]},{"institution":"University of California, Berkeley","area":"Financial Engineering","studyType":"Masters","startDate":"2014-01-01","endDate":"2015-01-01","start":{"year":2014,"month":null},"end":{"year":2015,"month":null},"description":"• Python, C++, R, MATLAB\n\n• Computer science, big data analytics, asset valuation, risk assessment, stochastic calculus, econometrics, statistics, optimization techniques\n\nAn interdisciplinary program in computer science, big data analytics, finance, mathematics, and statistics that trains professionals for careers in derivatives pricing, risk management, and quantitative portfolio management","activities":"","gpa":"","courses":[]},{"institution":"University of Tennessee, Knoxville","area":"Nuclear Engineering","studyType":"Bachelor's of Science","startDate":"2008-01-01","endDate":"2013-01-01","start":{"year":2008,"month":null},"end":{"year":2013,"month":null},"description":"Minor in Business Administration","activities":"","gpa":"","courses":[]}],"volunteer":[{"organization":"Mentor / Co-Founder","position":"Full Service Community School","website":"","location":"Knoxville, TN","summary":"• Contributed to team that implemented a full-service community school model for Title I school\n• Collaborated with local community and businesses leaders to create a network of volunteers\n• Tutored students individually at two separate Title I schools\n• Mentored students for ten hours weekly as an after school group leader","startDate":"2009-01-01","endDate":"2011-01-01","start":{"year":2009,"month":null},"end":{"year":2011,"month":null},"highlights":[]}],"awards":[],"languages":[],"interests":[],"references":[]}
    
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('https://gitconnected.com/v1/portfolio/treyhuffine')
            .then(res => res.json())
            .then(user => {
                setUser(user)
            })
    }, [])

    if(!user) {
        return <div />
    }

    return <Pages user={user} />
}

export default App