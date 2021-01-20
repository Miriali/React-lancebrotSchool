import React from 'react';
import './courses.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { GiSlicedBread } from 'react-icons/gi';
import { MdDateRange, MdAccessTime, MdTimer, MdFolderOpen } from 'react-icons/md';
import Testimonials from '../../components/Testimonials/testimonials';
import Contact from '../../components/Contact/Contact';

const Courses = () => {
    return (
        <>
            <div className="courses-container">
                <Tabs className="courses-content">
                    <h2>Lancebrot Courses</h2>
                    <TabList className="table">
                        <Tab>Savory Bread</Tab>
                        <Tab>Sweet Bread</Tab>
                        <Tab>Pizzas</Tab>
                        <Tab>Artisan Breads</Tab>
                        <Tab>Viennoiseries</Tab>
                        <Tab>International Breads</Tab>
                        <Tab>Venezuelan breads</Tab>
                    </TabList>
            
                    <TabPanel className="course-content">
                        <p>
                            <GiSlicedBread className="icon" />
                            <b>Level:</b> : Beginner
                        </p>
                
                        <p>
                            <MdDateRange className="icon" />
                            <b>Date:</b> From February 1 to February 12, 2021.
                        </p>
                
                        <p>
                            <MdAccessTime className="icon" />
                            <b>Schedule:</b> You can connect in your available hours, with two blocks of consultations with the teacher, in the morning and in the afternoon.
                        </p>
                
                        <p>
                            <MdTimer className="icon" />
                            <b>Duration:</b> Two weeks.
                        </p>
                
                        <p>
                            <MdFolderOpen className="icon" />
                            <b>Content:</b>
                        </p>

                        <p className="paragraph">
                            During two weeks the participant will learn to weigh the ingredients, calculate the baking formulas, correct mixing and kneading of the ingredients, form the salty dough and the hygiene and safety standards essential when it comes to being in the kitchen.  Each participant will learn how to make <em>7 types of savory breads:</em> French bread, rustic bread with herbs, Sicilian bread, Dutch bread, potato bread, butter bread and cheese bread.
                        </p>
                                
                        <button className="courses-btn">
                            Reserva tu cupo
                        </button>
                    </TabPanel>

                    <TabPanel className="course-content">
                        <p>
                            <GiSlicedBread className="icon" />
                            <b>Level:</b> : Beginner
                        </p>
                
                        <p>
                            <MdDateRange className="icon" />
                            <b>Date:</b> From February 8 to February 19, 2021.
                        </p>
                
                        <p>
                            <MdAccessTime className="icon" />
                            <b>Schedule:</b> You can connect in your available hours, with two blocks of consultations with the teacher, in the morning and in the afternoon.
                        </p>
                
                        <p>
                            <MdTimer className="icon" />
                            <b>Duration:</b> Two weeks.
                        </p>
                
                        <p>
                            <MdFolderOpen className="icon" />
                            <b>Content:</b>
                        </p>

                        <p className="paragraph">
                            During two weeks the participant will learn to weigh the ingredients, calculate the baking formulas, correct mixing and kneading of the ingredients, form the sweet dough and the hygiene and safety standards essential when it comes to being in the kitchen.  Each participant will learn how to make <em>7 types of sweet breads:</em> Round sweet bread, chocolate bread, nutella-filled braid, milk bread, guava bread, coconut bread, strawberry bread.
                        </p>
                                
                        <button className="courses-btn">
                            Reserva tu cupo
                        </button>
                    </TabPanel>

                    <TabPanel className="course-content">
                        <p>
                            <GiSlicedBread className="icon" />
                            <b>Level:</b> : Beginner
                        </p>
                
                        <p>
                            <MdDateRange className="icon" />
                            <b>Date:</b> From February 15 to February 26, 2021.
                        </p>
                
                        <p>
                            <MdAccessTime className="icon" />
                            <b>Schedule:</b> You can connect in your available hours, with two blocks of consultations with the teacher, in the morning and in the afternoon.
                        </p>
                
                        <p>
                            <MdTimer className="icon" />
                            <b>Duration:</b> Two weeks.
                        </p>
                
                        <p>
                            <MdFolderOpen className="icon" />
                            <b>Content:</b>
                        </p>

                        <p className="paragraph">
                            During two weeks the participant will learn to weigh the ingredients, calculate the baking formulas, correct mixing and kneading of the ingredients, form the pizza dough and the hygiene and safety standards essential when it comes to being in the kitchen.  Each participant will learn how to make <em>6 types of pizzas:</em> Pizza Marinara, Pizza Margherita, Chicago style Pizza, Neapolitan pizza, Pizza Fugazzeta, Pizza 4 cheeses.
                        </p>
                                
                        <button className="courses-btn">
                            Reserva tu cupo
                        </button>
                    </TabPanel>

                    <TabPanel className="course-content">
                        <p>
                            <GiSlicedBread className="icon" />
                            <b>Level:</b> : Intermediate
                        </p>
                
                        <p>
                            <MdDateRange className="icon" />
                            <b>Date:</b> From February 22 to February 26, 2021.
                        </p>
                
                        <p>
                            <MdAccessTime className="icon" />
                            <b>Schedule:</b> You can connect in your available hours, with two blocks of consultations with the teacher, in the morning and in the afternoon.
                        </p>
                
                        <p>
                            <MdTimer className="icon" />
                            <b>Duration:</b> One week.
                        </p>
                
                        <p>
                            <MdFolderOpen className="icon" />
                            <b>Content:</b>
                        </p>

                        <p className="paragraph">
                            In the artisan bread course you will learn to understand the processes of making a healthy, aromatic and quality bread, the participant will form their own sourdough, feed it and learn about the chemical processes that are involved in its evolution, they will meet depth of the fermentation process of different types of dough in addition to being able to make a sourdough bread with seeds.
                        </p>
                                
                        <button className="courses-btn">
                            Reserva tu cupo
                        </button>
                    </TabPanel>

                    <TabPanel className="course-content">
                        <p>
                            <GiSlicedBread className="icon" />
                            <b>Level:</b> : Advanced
                        </p>
                
                        <p>
                            <MdDateRange className="icon" />
                            <b>Date:</b> from March 8 to March 19.
                        </p>
                
                        <p>
                            <MdAccessTime className="icon" />
                            <b>Schedule:</b> You can connect in your available hours, with two blocks of consultations with the teacher, in the morning and in the afternoon.
                        </p>
                
                        <p>
                            <MdTimer className="icon" />
                            <b>Duration:</b> Two weeks.
                        </p>
                
                        <p>
                            <MdFolderOpen className="icon" />
                            <b>Content:</b>
                        </p>

                        <p className="paragraph">
                            During two weeks the participant will learn to weigh the ingredients, calculate the baking formulas, correct mixing and kneading of the ingredients and the hygiene and safety standards essential when it comes to being in the kitchen.  Besides each participant will learn how to make <em>5 types of viennoiseries:</em> pain au chocolat, croissants, brioche bread, éclair and  pain aux raisins.
                        </p>
                                
                        <button className="courses-btn">
                            Reserva tu cupo
                        </button>
                    </TabPanel>

                    <TabPanel className="course-content">
                        <p>
                            <GiSlicedBread className="icon" />
                            <b>Level:</b> : Advanced
                        </p>
                
                        <p>
                            <MdDateRange className="icon" />
                            <b>Date:</b> from March 15 to March 19.
                        </p>
                
                        <p>
                            <MdAccessTime className="icon" />
                            <b>Schedule:</b> You can connect in your available hours, with two blocks of consultations with the teacher, in the morning and in the afternoon.
                        </p>
                
                        <p>
                            <MdTimer className="icon" />
                            <b>Duration:</b> One week.
                        </p>
                
                        <p>
                            <MdFolderOpen className="icon" />
                            <b>Content:</b>
                        </p>

                        <p className="paragraph">
                            During two weeks the participant will learn to weigh the ingredients, calculate the baking formulas, correct mixing and kneading of the ingredients, form the dough and the hygiene and safety standards essential when it comes to being in the kitchen.  Each participant will learn how to make <em>4 types of international breads:</em> Povitica, ciabatta, Rye bread, naan bread.
                        </p>
                                
                        <button className="courses-btn">
                            Reserva tu cupo
                        </button>
                    </TabPanel>

                    <TabPanel className="course-content">
                        <p>
                            <GiSlicedBread className="icon" />
                            <b>Level:</b> : Advanced
                        </p>
                
                        <p>
                            <MdDateRange className="icon" />
                            <b>Date:</b> from March 22 to March 26.
                        </p>
                
                        <p>
                            <MdAccessTime className="icon" />
                            <b>Schedule:</b> You can connect in your available hours, with two blocks of consultations with the teacher, in the morning and in the afternoon.
                        </p>
                
                        <p>
                            <MdTimer className="icon" />
                            <b>Duration:</b> One week.
                        </p>
                
                        <p>
                            <MdFolderOpen className="icon" />
                            <b>Content:</b>
                        </p>

                        <p className="paragraph">
                            During two weeks the participant will learn to weigh the ingredients, calculate the baking formulas, correct mixing and kneading of the ingredients, form the dough and the hygiene and safety standards essential when it comes to being in the kitchen. Each participant will learn how to make <em>4 types of international breads:</em> Ham bread, Tocuyana acema, Andean bread, quesadillas.
                        </p>
                                
                        <button className="courses-btn">
                            Reserva tu cupo
                        </button>
                    </TabPanel>
                </Tabs>
            </div>
            
            <Testimonials />
            <Contact />            
        </>
    );
}

export default Courses;