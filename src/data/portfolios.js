import leetcode from '../img/portImages/Leetcode.png';
import ml_biosensors from '../img/portImages/ML_biosensors.jpg';
import blockchain_e from '../img/portImages/blockchain_e.jpg';
import tech_pine from '../img/portImages/tech_pine.png';
import content_w from '../img/portImages/content_w.jpeg';
import cell from '../img/portImages/cell.jpg';
import storybook from '../img/portImages/storybook.png'

const portfolios = [
    {
        id: 1,
        category: 'Competitive coding',
        image: leetcode,
        link1: 'https://github.com/rishabhgargdps/coding_prep',
        link2: '',
        title: 'Leetcode problems',
        text: 'Company-wise problems solved in C++'
    },
    {
        id: 2,
        category: 'Blockchain Development',
        image: blockchain_e,
        link1: 'https://github.com/rishabhgargdps/blockchain_dapps',
        link2: '',
        title: 'DApps for e-commerce',
        text: 'Source code for my Summer Internship at UPES institute'
    },
    {
        id: 3,
        category: 'Machine learning',
        image: ml_biosensors,
        link1: 'https://github.com/rishabhgargdps/ml_biosensors',
        link2: '',
        title: 'Machine learning in Biosensors',
        text: 'Design oriented Project under BITS Pilani Faculty : Dr. Gautam G. Bacher.'
    },
    {
        id: 4,
        category: 'Finance',
        image: tech_pine,
        link1: 'https://github.com/rishabhgargdps/pine_script_strategies',
        link2: '',
        title: 'Stock strategies using Pine script',
        text: 'Backtesting of strategies using Pine script, Trading view and HTML5 charts.'
    },
    {
        id: 5,
        category: 'Web development',
        image: content_w,
        link1: 'https://github.com/rishabhgargdps/redux_crash_course',
        link2: '',
        title: 'Content manager',
        text: 'Post/content management barebones website that add the posts through a basic form.'
    },
    {
        id: 6,
        category: 'Machine learning',
        image: cell,
        link1: 'https://github.com/rishabhgargdps/ml_biosensors',
        link2: '',
        title: 'Melanoma classifier',
        text: 'CNN using TensorFlow.'
    },
    {
        id: 7,
        category: 'Web development',
        image: storybook,
        link1: 'https://github.com/rishabhgargdps/storybook-app',
        link2: '',
        title: 'Book content storage',
        text: 'Storybook dashboard with react framework'
    },
]

export default portfolios;