import COLORS from '../../utils/colors'

export const projectOne = {
    id: 'heap',
    header: 'Heap Allocator',
    shorthand: 'Implemented an implicit and explicit heap allocator to manage the heap by servicing requests such as malloc, realloc, and free.',
    color: COLORS.blue,
    languages: ['C'],
    tools: 'C',
    sourceText: 'Unavailable due to Stanford Honor Code',
    sourceUrl: 'https://cs.stanford.edu/degrees/ug/HonorCode.shtml#:~:text=The%20Stanford%20University%20Honor%20Code&text=The%20faculty%20on%20its%20part,forms%20of%20dishonesty%20mentioned%20above.',
    description: ['This project was my final project for my CS107: Computer Organizations & Systems class. Our assignment was to recreate a working implicit and explicit heap allocator which aligned with the current C documentation. I had to design my program for requests such as malloc, realloc, and free while ensuring correctness, tight utilization, and speed. \n My heap allocator allowed me to master my pointer and debugging skills. It was important to have solid deconstruction, especially due to the scope of the project. When designing my allocators, I first prioritized accuracy: making sure that the allocated memory could be found again and that there were no overlaps or leaks in memory. Although this assignment was incredibly difficult, I was very proud to see the final finished product!'],
    website: null,
}

export const projectTwo = {
    id: 'budder',
    header: 'Budder App',
    shorthand: 'Designed and developed budder, a cross-platform app for maintaining and organizing friendships.',
    color: COLORS.pink,
    languages: ['React Native', 'Expo', 'Figma'],
    tools: 'React Native, Expo, Figma',
    sourceText: 'Github',
    sourceUrl: 'https://github.com/karinakli/budder-app',
    description: ['I designed and developed budder with three of my lovely teammates (Andrea, Daniel, and Jaime) in my CS 147: Intro to Human-Computer Interaction class. budder is a built-in friendship manager, helping users stay close to those they care about, from organizing and maintaining relationships by suggesting meetups with friends to making itineraries for these meetups based on previous interactions.', 
        'As a first-time designer and developer working in a four-person group, I learned about all aspects of the UI/UX process, including user interviews and testing, iterating, ideating, and prototyping. Throughout the need-finding and testing process, we interviewed more than 15+ people from diverse backgrounds to hear more about their personal stories and struggles, while also understanding the needs and goals of potential users. During the prototyping stages, we had to consider the layout and organization of the app, as well as the visual design elements such as color and typography.', 
        'Throughout this design journey, I discovered my love for collaborating and my passion for creating, and it ultimately helped me better understand myself. I loved having the opportunity to make a positive impact on the user experience while also combining my creativity and problem-solving skills.'],
    website: 'https://web.stanford.edu/class/cs147/projects/FindingFocus/budder/',
}

export const projectThree = {
    id: 'website',
    header: 'Personal Website',
    shorthand: 'I designed and developed this website from scratch using Figma and ReactJS.',
    color: COLORS.green,
    languages: ['React', 'Figma'],
    tools: 'ReactJS, Figma',
    sourceText: 'GitHub',
    sourceUrl: 'https://github.com/karinakli/portfolio-project-2022',
    description: ['This portfolio website was built to showcase my work experiences and projects. I wanted to create a simple, minimalist UI that had small animations embedded within the CSS. To carry out these expectations, I learned to utilize the ReactJS library along with CSS through styled-components. I followed the necessary steps needed to design this website, including mood boarding, wireframing, and prototyping.', 
        'It was my first time using both Figma and ReactJS, and I really enjoyed combining design and coding together in a project. I am excited to continue exploring Product Design and Computer Science more in future classes and projects.'],
    website: null,
}

export const projectFour = {
    id: 'huffman',
    header: 'Huffman Coding',
    shorthand: 'Implemented a program that uses Huffman coding to compress and decompress files using recursive exploration, linked structures, trees, and streaming algorithms.',
    color: COLORS.pink,
    languages: ['C++'],
    tools: 'C++',
    sourceText: 'Unavailable due to Stanford Honor Code',
    sourceUrl: 'https://cs.stanford.edu/degrees/ug/HonorCode.shtml#:~:text=The%20Stanford%20University%20Honor%20Code&text=The%20faculty%20on%20its%20part,forms%20of%20dishonesty%20mentioned%20above.',
    description: ['This project was the final project for my CS106B: Programming Abstractions class. In this assignment, I was asked to implement the Huffman coding algorithm, which pulls concepts from the entire quarter. I utilized trees, queues, linked structures, recursive exploration, and streaming algorithms.', 
        'Writing this Huffman Coding algorithm was very fulfilling, especially when watching all the different parts come together in the end to create a working program. I was very excited to see the progress I had made since the beginning of the class!'],
    website: null
}