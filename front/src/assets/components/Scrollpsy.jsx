import React, { useEffect, useRef, useState } from "react";
import "./Scrollpsy.css";

function Scrollspy({ topicos, informacoes }) {
  const [active, setActive] = useState(topicos[0]?.id);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleClick(id) {
    refs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActive(id);
  }

  return (
    <div className="scrollspy-container">
      <aside className="scrollspy-sidebar">
        <h2 className="sidebar-title">Tópicos</h2>

        <ul className="sidebar-list">
          {topicos.map((item) => (
            <li key={item.id} className="sidebar-item">
              <button
                onClick={() => handleClick(item.id)}
                className={`sidebar-button ${
                  active === item.id ? "sidebar-button-active" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="scrollspy-content">
        {topicos.map((item) => (
          <section
            key={item.id}
            id={item.id}
            ref={(el) => (refs.current[item.id] = el)}
            className="content-section"
          >
            <h3 className="section-title">{item.label}</h3>

            <p className="section-text">
              {informacoes[item.id]?.descricao ??
                "Nenhuma descrição disponível"}
            </p>

            {informacoes[item.id]?.fotos?.length > 0 && (
              <div className="section-gallery">
                {informacoes[item.id].fotos.map((img, i) => (
                  <img src={img} key={i} className="gallery-image" />
                ))}
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}

export default Scrollspy;
