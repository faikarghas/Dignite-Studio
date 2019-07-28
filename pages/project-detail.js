import Layout from '../components/layouts'
import GAwrapper from '../lib/GAWarp';

class Project extends React.Component {

    render(){
        return (
            <GAwrapper>
            <Layout>
                    {/* <h1 className="text-center mb-5">{data[0].title}</h1> */}
                    <p className="">Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse <br/> quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                    {/* <a className="button_seeLive" href={data[0].link} target="_blank">See Live</a> */}
            </Layout>
            </GAwrapper>
        )
    }
}

export default Project
