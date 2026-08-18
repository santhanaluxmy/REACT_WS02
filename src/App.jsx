import { useState } from 'react'

import './App.css'
import image1 from './assets/image1.jpeg'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'    
import image4 from './assets/image4.jpeg'  
import image5 from './assets/image5.jpeg'
import image6 from './assets/image6.jpeg'
import image7 from './assets/image7.jpeg'
import image8 from './assets/image8.jpeg'
import image9 from './assets/image9.jpeg'
import image10 from './assets/image10.jpeg'
import image11 from './assets/image11.jpeg'
import image12 from './assets/image12.jpeg'

function ProfileCard({ name, age, bio, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.age}>Age: {age}</p>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
}

export default function App() {
  // Array of 12 different profile data objects
  const profiles = [
    {
      name: " Johnson",
      age: 28,
      bio: "Cricket player",
      image: image1
    },
    {
      name: "David Smith",
      age: 34,
      bio: " Cricket enthusiast  who loves to build web applications.",
      image: image2
    },
    {
      name: "Elena Rostova",
      age: 25,
      bio: " Cricket player ",
      image: image3
    },
    {
      name: "Marcus Chen",
      age: 30,
      bio: "Cricket player and software engineer.",
      image: image4
    },
    {
      name: "Sophia Martinez",
      age: 27,
      bio: "Data analyst and data visualization specialist.",
      image: image5
    },
    {
      name: "Liam O'Connor",
      age: 32,
      bio: "DevOps specialist keeping pipelines green and servers running smoothly.",
      image: image6
    },
    {
      name: "Aisha Patel",
      age: 26,
      bio: "Mobile app developer crafting cross-platform experiences with React Native.",
      image: image7
    },
    {
      name: "James Wilson",
      age: 41,
      bio: "Engineering manager leading high-performing teams to deliver impact.",
      image: image8
    },
    {
      name: "Chloe Kim",
      age: 24,
      bio: "Junior developer eager to learn new technologies and contribute to open source.",
      image: image9
    },
    {
      name: "Lucas Vance",
      age: 35,
      bio: "Cybersecurity analyst protecting infrastructure from modern threats.",
      image: image10
    },
    {
      name: "Zoe Taylor",
      age: 29,
      bio: "Product manager turning user feedback into feature roadmaps.",
      image: image11
    },
    {
      name: "Noah Brooks",
      age: 38,
      bio: "Software architect designing resilient systems and mentoring developers.",
      image: image12
    }
  ];

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.headerTitle}>Team Profiles</h1>
      <div style={styles.gridContainer}>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
}

// 3. Inline CSS Styles Object
const styles = {
  appContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  headerTitle: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#1f2937",
    fontSize: "2.5rem",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns per line (4 x 3 lines = 12 profiles)
    gap: "24px",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "center",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  image: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "16px",
    border: "3px solid #3b82f6",
  },
  name: {
    margin: "0 0 8px 0",
    fontSize: "1.25rem",
    color: "#111827",
  },
  age: {
    margin: "0 0 12px 0",
    fontSize: "0.9rem",
    color: "#6b7280",
    fontWeight: "600",
  },
  bio: {
    margin: "0",
    fontSize: "0.95rem",
    color: "#4b5563",
    lineHeight: "1.5",
  },
};
