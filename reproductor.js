const audioPlayer = document.getElementById("audioPlayer");

function reproducirCancion(src) {
  audioPlayer.src = src;
  audioPlayer.play();
}

function pausarCancion() {
  audioPlayer.pause();
}

function detenerCancion() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

    class Reproductor {
    constructor(canciones) {
      this.canciones = canciones;
      this.enReproduccion = false;
      this.ahoraSuena = -1;
    }

    play(index) {
        if (index >= 0 && index < this.canciones.length) {
            this.ahoraSuena = index;
            const cancionActual = this.canciones[this.ahoraSuena];
            console.log("Reproduciendo: " + cancionActual.nombre);
            this.showSongInSite();
            audioPlayer.src = cancionActual.archivo; // Establecer la fuente de la canción
            audioPlayer.play(); // Reproducir la canción
        } else {
            console.log("Índice de canción fuera de rango.");
        }
    }

    play(songName) {
        // Buscar el índice de la canción por su nombre
        const index = this.canciones.findIndex(cancion => cancion.nombre === songName);
        
        if (index !== -1) {
            this.ahoraSuena = index;
            console.log("Reproduciendo: " + this.canciones[this.ahoraSuena].nombre);
            this.showSongInSite();
        } else {
            console.log("La canción seleccionada no está en la lista.");
        }
    }
  
    playPause() {
      this.enReproduccion = !this.enReproduccion;
      if (this.enReproduccion) {
        console.log("Ahora suena: " + this.canciones[this.ahoraSuena].nombreCancion);
      } else {
        console.log("Haz pausado la reproducción");
      }
      this.showSongInSite();
    }
  
    shuffle() {
      this.ahoraSuena = Math.floor(Math.random() * this.canciones.length);
      this.showSongInSite();
    }
  
    next() {
      if (this.ahoraSuena < this.canciones.length - 1) {
        this.ahoraSuena++;
      }
      this.showSongInSite();
    }
  
    prev() {
      if (this.ahoraSuena > 0) {
        this.ahoraSuena--;
      }
      this.showSongInSite();
    }
  
    stop() {
      console.log("Haz detenido la reproducción");
      this.ahoraSuena = -1;
      this.showSongInSite();
    }
  
    play(song) {
      if (typeof song === "number") {
        this.ahoraSuena = song;
      } else {
        // Buscar el número de la canción por su nombre
        this.ahoraSuena = this.canciones.findIndex(cancion => cancion.nombre === song);
      }
      this.showSongInSite();
    }
  
    songsList() {
      let html = "<ul>";
      this.canciones.forEach((cancion, index) => {
        html += `<li><a href="#" onclick="reproductor.play(${index})">${cancion.nombre}</a></li>`;
      });
      html += "</ul>";
      return html;
    }
  
    showSongInSite() {
      const songInfo = document.getElementById("song-info");
      if (this.ahoraSuena !== -1) {
        const cancionActual = this.canciones[this.ahoraSuena];
        songInfo.innerHTML = `
          <img src="${cancionActual.imagen}" alt="${cancionActual.album}">
          <h2>${cancionActual.nombre}</h2>
          <p>Álbum: ${cancionActual.album}</p>
          <p>Artista: ${cancionActual.artista}</p>
          <p>Duración: ${cancionActual.duracion}</p>
          <audio controls src="${cancionActual.archivo}"></audio>
        `;
      } else {
        songInfo.innerHTML = ""; // No hay canción seleccionada
      }
    }
  }
  
  // Crear una instancia de Reproductor con el arreglo de canciones
  const canciones = [
    {
        nombre: "Shatter Me",
        album: "Shatter Me",
        artista: "Lindsey Stirling ft. Lzzy Hale",
        duracion: "4:40",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/f490c2fc6c85a48c604ef0accb53521a/500x500-000000-80-0-0.jpg",
        archivo: "audio/Shatter Me.mp3"
    },
    {
        nombre: "Perdón",
        album: "Elypse",
        artista: "Camila",
        duracion: "4:20",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/3618fe4a73fec9fb8d8d7e0ef50a8043/500x500-000000-80-0-0.jpg",
        archivo: "audio/Perdon.mp3"
    },
    {
        nombre: "Fell This Moment",
        album: "Global Warming",
        artista: "Pitbull ft. Christina Aguilera",
        duracion: "3:50",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/ae51dcb12e53c58f9b68dcb38da8d04f/500x500-000000-80-0-0.jpg",
        archivo: "audio/Feel This Moment.mp3"
    },
    {
        nombre: "Club Can’t Handle Me",
        album: "Club Can't Handle Me",
        artista: "Flo Rida feat. David Guetta",
        duracion: "3:52",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/a2fbe9617951f25d9e0f54dbcd60b7e5/500x500-000000-80-0-0.jpg",
        archivo: "audio/Club Can t Handle Me.mp3"
    },
    {
        nombre: "Do or Die",
        album: "Do or Die",
        artista: "Natalie Jane",
        duracion: "2:30",
        imagen: "https://m.media-amazon.com/images/I/51G2SNbcYHL._UXNaN_FMjpg_QL85_.jpg",
        archivo: "audio/Do Or Die.mp3"
    },
    {
        nombre: "Phoenix",
        album: "Phoenix",
        artista: "Cailin Russo y Chrissy Costanza",
        duracion: "3:27",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/45eecedfdf3496b8bb31831ea0e93a30/500x500-000000-80-0-0.jpg",
        archivo: "audio/Phoenix.mp3"
    },
    {
        nombre: "Legends Never Die",
        album: "Leguage of Legends",
        artista: "League Of Legends, Against The Current",
        duracion: "3:55",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/c5be10e75b16bd7636c6b87854bd5016/500x500-000000-80-0-0.jpg",
        archivo: "audio/Legends Never Die.mp3"
    },
    {
        nombre: "Tatoo",
        album: "Tatoo",
        artista: "Loreen",
        duracion: "3:03",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/d84129b2da7661300fb9db545b0b7df6/500x500-000000-80-0-0.jpg",
        archivo: "audio/Tattoo.mp3"
    },
    {
        nombre: "Who I Am",
        album: "Who I Am",
        artista: "Alan Walker",
        duracion: "3:31",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/d3c5df538cbff19074f036f5076a464d/500x500-000000-80-0-0.jpg",
        archivo: "audio/Who I Am.mp3"
    },
    {
        nombre: "Love Me Hard",
        album: "Love Me Hard",
        artista: "Elley Duhe",
        duracion: "3:40",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/e4db45682f5ca77f0b98282b634b4f23/500x500-000000-80-0-0.jpg",
        archivo: "audio/LOVE ME HARD.mp3"
    },
    {
        nombre: "Tears of Gold",
        album: "Tears of Gold",
        artista: "Fouzia",
        duracion: "2:55",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/95202fa80f6b998650e15b4fb91722d1/500x500-000000-80-0-0.jpg",
        archivo: "audio/Tears of Gold.mp3"
    },
    {
        nombre: "Lovely",
        album: "Lovely",
        artista: "Billie Eilish ft. Khalid",
        duracion: "3:20",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/910033ba5cd64291a921061c8e8ba85a/500x500-000000-80-0-0.jpg",
        archivo: "audio/Lovely.mp3"
    },
    {
        nombre: "Without Me",
        album: "Without Me",
        artista: "Halsey",
        duracion: "3:23",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/fce4df7f3dd3f3daf83ffff8015c005f/500x500-000000-80-0-0.jpg",
        archivo: "audio/Without Me.mp3"
    },
    {
        nombre: "Maria",
        album: "Maria",
        artista: "Hwa Sa",
        duracion: "3:19",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/19796a0a48c3774ddaf18856f1c7d656/500x500-000000-80-0-0.jpg",
        archivo: "audio/Maria.mp3"
    },
    {
        nombre: "Unstoppable",
        album: "Unstoppable",
        artista: "Sia",
        duracion: "3:40",
        imagen: "https://e-cdn-images.dzcdn.net/images/cover/5a86a131864e4bfdda6c45c31fdbee3d/500x500-000000-80-0-0.jpg",
        archivo: "audio/Unstoppable.mp3"
    }
  ];
  
  const reproductor = new Reproductor(canciones);

    // Obtener el elemento donde se mostrará la lista de canciones
    const songsListContainer = document.getElementById("songs-list");
    // Generar la lista de canciones
    songsListContainer.innerHTML = reproductor.songsList();
    // Mostrar la información de la primera canción por defecto
    reproductor.showSongInSite();