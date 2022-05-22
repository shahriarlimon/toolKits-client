import React from "react";

const Carosel = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full ">
          <img
            src="https://wallpaperaccess.com/full/1880033.jpg"
            class="w-full h-[400px]"
            alt=""
          />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img
            src="https://wallpaperaccess.com/full/1880053.jpg"
            class="w-full h-[400px]"
            alt=""
          />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img
            src="https://c1.wallpaperflare.com/preview/381/886/420/tools-work-repair-hammer-thumbnail.jpg"
            class="w-full h-[400px]"
            alt=""
          />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img
            src="https://blog.dba.bg/media/blogs/RStanoev/quick-uploads/p157/psu.jpg?mtime=1489659044"
            class="w-full h-[400px]"
            alt=""
          />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Carosel;
