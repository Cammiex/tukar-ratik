function Jumbotron() {
  return (
    <div className="w-full h-[597px] mb-[190px] relative flex items-center justify-center group">
      <div className="absolute z-[1] size-full bg-gradient-to-b from-[rgb(87,122,118,0.6)] to-[#1F2C2A] opacity-80"></div>
      <div className="size-full absolute overflow-hidden">
        <img
          src="images/LandingPage/hero-landingpage.png"
          alt=""
          className=" object-cover object-top group-hover:scale-110 transition duration-[1500ms]"
        />
      </div>
      <div className="flex flex-col z-10 text-center gap-[10px]">
        <h1 className="text-5xl font-poppins font-semibold text-green-50 leading-[120%]">
          Tukar Sisa Makanan <br />
          Menjadi Bahan Makanan
        </h1>
        <div className="flex flex-col items-center gap-5">
          <p className="text-Title font-medium text-gray-50">
            Dengan TukaRatik, setiap langkah kecil merupakan pijakan besar
            menuju perubahan positif. <br />
            Bergabunglah sekarang untuk mengubah sampah rumah tangga menjadi
            kesejahteraan bagi semua.
          </p>
          <div className="w-[399px] h-1 bg-primary-300 "></div>
          <button className="size-fit px-6 py-[13px] bg-primary-600 text-gray-50 hover:text-gray-200 active:text-gray-400 rounded-3xl text-Subtitle hover:bg-tertiary-600 active:bg-tertiary-800 transition duration-300">
            Telusuri Lebih Lanjut
          </button>
          <div className="w-[946px] h-[180px] bg-white rounded-lg absolute -bottom-[90px] shadow-500 flex items-center justify-center gap-7 px-[79px]">
            <div className="flex flex-col gap-[6px] items-center w-[236px]">
              <img
                src="images/LandingPage/icon-landingpage1.png"
                alt=""
                className="w-[52px] h-[52px]"
              />
              <h1 className="text-[15px] font-poppins font-semibold text-black/80">
                Produk Berkualitas
              </h1>
              <p className="text-[15px] font-poppins font-normal text-black/70 text-center">
                Produk Segar Pilihan dari Petani Lokal
              </p>
            </div>
            <div className="flex flex-col gap-[6px] items-center w-[236px]">
              <img
                src="images/LandingPage/icon-landingpage2.png"
                alt=""
                className="w-[52px] h-[52px]"
              />
              <h1 className="text-[15px] font-poppins font-semibold text-black/80">
                Peduli Lokal
              </h1>
              <p className="text-[15px] font-poppins font-normal text-black/70 text-center">
                Berkerjasama Dengan Petani Sekitar
              </p>
            </div>
            <div className="flex flex-col gap-[6px] items-center w-[236px]">
              <img
                src="images/LandingPage/icon-landingpage3.png"
                alt=""
                className="w-[52px] h-[52px]"
              />
              <h1 className="text-[15px] font-poppins font-semibold text-black/80">
                Praktis & Efektif
              </h1>
              <p className="text-[15px] font-poppins font-normal text-black/70 text-center">
                Limbah Akan Dijemput Ke Rumah Langsung
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
