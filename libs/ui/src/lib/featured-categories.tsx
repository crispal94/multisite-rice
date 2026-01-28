'use client';

export const FeaturedCategories = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold text-text-main dark:text-white mb-2">
          Shop by Variety
        </h2>
        <p className="text-text-muted">
          Curated grains from the world's finest harvests.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            title: 'Basmati',
            subtitle: 'Aromatic & Long',
            imageUrl:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDkOOLeOs7ZM8UGiaPI2aLovrA6P_qu0t-MZc0NIBmeNngugNYgfDU9wMWm1Ii5fY_Qae5BXkQ8zqyehQ6kDK1z3Yz2b9DhHX7exYggyDGsb-NkeVJcXqktwBjdbVQXhTSRPpC8zXl4cnBO913eVEZMaiFQobrzvn411y1wADyVXRShv-el4l7Agmq_YV9h5AKWh5wY3Yjb8-uh5RgPbG_CDAT8Oz2idkiGwWo-ie8tVmoDyxy7SB0H-0UMDUpxRmxjjUA6pqdp5EF-',
          },
          {
            title: 'Jasmine',
            subtitle: 'Fragrant & Soft',
            imageUrl:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBwvwPQgXjEkiv3_Vr5LBntiRxEs2OIoGn-iIw_7RXMFF9dRk3gIROWoQl2cPJ8SvAQakyhIRHxTTtFwgTXtx796z9tXKK-ycmJiYb5cZxTrFjCCZbdmBW4Mm5HoZQoe1_d4d7JbYbGal-GZ0LP3aR8W7hlMTDzWlH05iS_cT-XcZGZw3WLtcqAldeXkR2YuegKrqFcYqjQQooqGw3cqBAZTiwniyhPRQ7H-23NgGTv9CP4kxzsDkY6MD85yIIucKNI8NAvgV_oCtvG',
          },
          {
            title: 'Black Rice',
            subtitle: 'Nutty & Rich',
            imageUrl:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuALgvaDs0_ohzfZ_v9BZMpE53_I77FeIRMjrNcv_9IiCOHK6nF0KxTMSP-ngr60Zm6fSG7QRVqgOA4vuczkqKE8kFF6KMphxPid5RB1H_aEE1vl99NqMqUaC7Z90cVn_ITQk_k91u47FV0VRYVscK_JyAohCC2CeQ4CLUfrp61877-bqgZf7ze9MawafRXLpSlJrnGZfvq3uci_yTREHKpjhtKhxcW-e_gokW4OwJNzo0wWbSdMq2zaCJdRAUn2a5CapUdFmiq7RpYy',
          },
          {
            title: 'Brown Rice',
            subtitle: 'Whole Grain',
            imageUrl:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCctr-bUfUcoWmx60Q3W5SfpSzGJyWjZHmWFDQZ4XlwOnqAqzfDnDHRkQ-PLtYOH06fTg30Uu7AOlqOAoF6QwvklUFjrhLunH4l1BoW-mpbEiHb9qfvLyL05fkYLZKZaLSFzURMXcBV3RiWaD3t_WTAjqx7rf7OFU32YK65hVroyHEEyOy2QvqCnVlgEGO7-Ih0WFm6BLVWqfm6gMsDED-cBixUFrAHxYtoz-XAwQ07p4LHn4uEwrTmiU-MB9eybE_A4cWLehw6DgV9',
          },
        ].map((category) => (
          <a
            key={category.title}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-200 cursor-pointer"
            href="#"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${category.imageUrl}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity"></div>
            <div className="absolute bottom-6 left-0 w-full text-center text-white">
              <h3 className="font-display font-bold text-xl mb-1">
                {category.title}
              </h3>
              <p className="text-xs text-stone-200 uppercase tracking-widest">
                {category.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
