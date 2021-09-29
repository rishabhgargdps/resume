import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import CoursesSection from '../Components/CoursesSection'
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import courses from "../data/courses";

const allButtons = ["All", ...new Set(courses.map((item) => item.category))];

function CoursesPage() {
  const [menuItem, setMenuItems] = useState(courses);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(courses);
      return;
    }

    const filteredData = courses.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Courses"} span={"courses"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
        <CoursesSection />
      </InnerLayout>
    </MainLayout>
  );
}

export default CoursesPage;
