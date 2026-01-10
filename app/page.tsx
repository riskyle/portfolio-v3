import Hero from '@/components/hero';
import Header from '@/components/header';
import About from '@/components/about';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const getUserInfo = async () => {
  let userInfo: any = [];

  try {
    const { data, error } = await supabase.from("user_info").select("*").single();
    if (error) {
      throw error;
    }

    userInfo = {
      name: data.name,
      title: data.title,
      links: data.links,
      description: data.description,
    };
  } catch (error) {
    console.error("Error fetching user info:", error);
  }

  return userInfo;
}

const getSkills = async () => {
  let skills = [];

  try {
    const { data, error } = await supabase.from("skills").select("*");
    if (error) {
      throw error;
    }
    skills = data;
  } catch (error) {
    console.error("Error fetching user info:", error);
  }

  return skills;
}

const getExperience = async () => {
  let experiences = [];
  try {
    const { data, error } = await supabase.from("experiences").select("*");
    if (error) {
      throw error;
    }
    experiences = data;
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
  return experiences;
};

const getProjects = async () => {
  let projects = [];
  try {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
      throw error;
    }
    projects = data;
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
  return projects;
};

export default async function Main() {
  const user = await getUserInfo();
  const skills = await getSkills();
  const experiences = await getExperience();
  const projects = await getProjects();

  return (
    <main>
      <Header />
      <Hero user={user} />
      <About description={user.description} />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Certifications />
      <Contact />
    </main>
  );
}
