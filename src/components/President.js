const imgPresident = [
    {
        name: 'Emmanuel Macron',
        mandat: '',
        src : 'https://static.elysee.fr/images/default/0001/02/cea32b77cc47ad7a0d51c4eb3c8c52e5b87bf9fc.jpeg?w=760&h=1145&s=393dfe9275da5c501d920442482b985e22124dd8f671dc451889d924d4b055a2'
    },
    {
        name: 'François Hollande',
        mandat: '',
        src : 'https://static.elysee.fr/images/default/0001/02/162118f06b1cb523fc701bc9af3786e10dd916f2.jpeg?w=760&h=1145&s=dd94ead795e3130db45fbf6d6cd25a79ef6f657909b1a861bf8a406a29a680cb'
    },
    {
        name: 'Nicolas Sarkozy',
        mandat: '',
        src : 'https://static.elysee.fr/images/default/0001/02/c1a4affe262217c14e789c993e48798e2f7870f4.jpeg?w=760&h=1145&s=c60708e584a68fa51198d62aaffd3aa911b8d4a4dfcdbf9a8abab3f853b9eba9'
    },
    {
        name: 'Jacques Chirac',
        mandat: '',
        src : 'https://static.elysee.fr/images/default/0001/02/c3467114052fd21e0ba3768cf216fd1bad164852.jpeg?w=760&h=1145&s=a2cbfab3d2ff1eed723a8e01935971bf535aee499743ab70e059f09273d9a01f'
    },
    {
        name: 'François Mitterand',
        mandat: "1981 - 1995",
        src : 'https://static.elysee.fr/images/default/0001/02/90a988df4304c815dda1fa77d2733504c70cf56a.jpeg?w=760&h=1145&s=1efed4c02ca8f0c7b5a84b120e16c0bfe550c713029e73c1eda1e190c3de90f4'
    },
    {
        name: 'Valéry Giscard d\'Estaing',
        mandat: '1974 - 1981',
        src : 'https://static.elysee.fr/images/default/0001/02/b12a37a3e3bead4658e72206455a1bf910490332.jpeg?w=760&h=1145&s=3454d97c3a05975b8506c8181202f7b437ce7c7d7330c4db68ce6ae74b23349c'
    },
    {
        name: 'Georges Pompidou',
        mandat: '1969 - 1974 ',
        src : 'https://static.elysee.fr/images/default/0001/02/037d248e98e457983659a7626c259e9b6f762bb6.jpeg?w=760&h=1145&s=84f37ba21b3fccd413ff23d576597df9acdf080cecac1cd18bbe8369b74c5c67'
    },
    {
        name: 'Charles de Gaulle',
        mandat: '1959 - 1969',
        src : 'https://static.elysee.fr/images/default/0001/02/2b14cc268d0be2c7c7605bca866fea0c24d55d09.jpeg?w=760&h=1145&s=1171bc3db73c679bb45bcffcd1b022e58fdfd935de2083ca27cd5c381a19b0ab'
    },
    {
        name: 'René Coty',
        mandat: '1954 - 1959',
        src : 'https://static.elysee.fr/images/default/0001/02/798626f021bc411c6c380875061fe888deeb170a.jpeg?w=760&h=1145&s=836ed5e0267e86991607d8077f8f519d4a7711683ad69234a33ea714ce4ee45f'
    },
    {
        name: 'Vincent Auriol',
        mandat: '1947 - 1954',
        src : 'https://static.elysee.fr/images/default/0001/02/328a1016f44cfd8de20389bddddc391c3c7b40cc.jpeg?w=760&h=1145&s=42db2cd805685e89b8c71e0421b6947ee2bb1ca3c5b0d756eaae97f7fa37d394'
    },
    {
        name: 'Albert Lebrun',
        mandat: '1932 - 1940',
        src : 'https://static.elysee.fr/images/default/0001/02/388489e0edfd2aa861c1499910d7d4c37b6b6095.jpeg?w=760&h=1145&s=c1f4f613c3ac615ec3954770e3f3a72e5f2a7f7042fd26d906788b1180fe8317'
    },
    {
        name: 'Paul Doumer',
        mandat: '1931 - 1932',
        src : 'https://static.elysee.fr/images/default/0001/02/9149aec3afee7d3bb02a580ba9cb746b95528241.jpeg?w=760&h=1145&s=5a142457eb00aae74ca46fe05c603e897ad7d0111a511fb66ac2507e74d702f5'
    },
    {
        name: 'Gaston Doumergue',
        mandat: '1924 - 1931',
        src : 'https://static.elysee.fr/images/default/0001/02/307b321a0cd0d23071369526f694ee4791a188e3.jpeg?w=760&h=1145&s=948b3d7fc785e79d84a833399c6dfb01a346eda262732f7b3325a2e3ef0e0656'
    },
    {
        name: 'Alexandre Millerand',
        mandat: '1920 - 1924',
        src : 'https://static.elysee.fr/images/default/0001/02/25edd838e4e789f2ef12883e86bbacff0835890b.jpeg?w=760&h=1145&s=2d9fbf8d1841fa0cf177cab19dcc2b6d0d05ddc5845028f197299fd98049b4a8'
    },
    {
        name: 'Paul Deschanel',
        mandat: '1920 - 1920',
        src : 'https://static.elysee.fr/images/default/0001/02/834129beb3135bc57c5d833a3601f54a6edb2727.jpeg?w=760&h=1145&s=6e96ae9003260d7f32a1e950d6592feda17fdc18de0964581a48e09bf7a2ed6b'
    },
    {
        name: 'Raymond Poincaré',
        mandat: '1913 - 1920',
        src : 'https://static.elysee.fr/images/default/0001/02/2e6664b3e9f1bb2ea274054c26c63ea6eaa61e21.jpeg?w=760&h=1145&s=789e86adf263a628c312e6765487fb4f8da6458775ac01c2c7eefb108fb825ee'
    },
    {
        name: 'Armand Fallières',
        mandat: '1906 - 1913',
        src : 'https://static.elysee.fr/images/default/0001/02/e5be4306a0e18dd07d9e2b62c534e70878e48535.jpeg?w=760&h=1145&s=67fc2f63cd69d65752f72f51a0a0ef3520079d96d1cfdbc0d8b053a103436924'
    },
    {
        name: 'Émile Loubet',
        mandat: '1899 - 1906',
        src : 'https://static.elysee.fr/images/default/0001/02/144f99b1be0d47bf662aa8edee7a35882b7e381b.jpeg?w=760&h=1145&s=2dde9f6fa11b9a549cce635825b42422c966d6d2391c0e200cc74cbf3849ff88'
    },
    {
        name: 'Félix Faure',
        mandat: '1895 - 1899',
        src : 'https://static.elysee.fr/images/default/0001/02/ef2de9fc7ef26d136d9ebe2dc0f2c6e87617f95e.jpeg?w=760&h=1145&s=b6aba7fc154dc1fb91f3103b3bc1ea2bd909ee9bc4dded766e05d94bcc42b8aa'
    },
    {
        name: 'Jean Casimir-Perier',
        mandat: '1894 - 1895',
        src : 'https://static.elysee.fr/images/default/0001/02/144cae62efd995fc90a68bb2b3b2b3a8f72aa9e0.jpeg?w=760&h=1145&s=ec514228e8dc6b323f0c8c2981bd41de1206aad477066f94c6d0b7c96da12df1'
    },
    {
        name: 'Sadi Carnot',
        mandat: '1887 - 1894',
        src : 'https://static.elysee.fr/images/default/0001/02/3ec49ecfd9d0f619240b5fa70a47ab198498b926.jpeg?w=760&h=1145&s=53c895fed3f8bd6854784afcf4f914df701afe12449c2909a9d26622d85fa6dd'
    },
    {
        name: 'Jules Grévy',
        mandat: '1879 - 1887',
        src : 'https://static.elysee.fr/images/default/0001/02/cc35ad8acbe5577ae54e3a0bf7078d0c2ebb29e4.jpeg?w=760&h=1145&s=b215e5547caeb735d3c2190a096330fdea9b2010bdff0b34798ffa99a6f97c98'
    },
    {
        name: 'Patrice de Mac Mahon',
        mandat: '1873 - 1879',
        src : 'https://static.elysee.fr/images/default/0001/02/7ced04e106b5e0266cbfb0cc677969a0e986f0aa.jpeg?w=760&h=1145&s=34af06b55e37bb3beef90e9fe660f25da560cb5df2d26605ebc8513b84a49fdb'
    },
    {
        name: 'Adolphe Thiers',
        mandat: '1871 - 1873',
        src : 'https://static.elysee.fr/images/default/0001/02/50da9122502b8d6b97a3850e40911ef7f260a287.jpeg?w=760&h=1145&s=623098196971f59c042d827bc9c6d17916208322bd5e80da1da91da893403373'
    },
    {
        name: 'Louis-Napoléon Bonaparte',
        mandat: '1848 - 1851',
        src : 'https://static.elysee.fr/images/default/0001/02/216b0065ddb75c5f3a94bbd65ac17fbd4d8ae829.jpeg?w=760&h=1145&s=6f99ed171c9990a31f75c539ee57f9acab7af39e51c764c31d6c0ac631f9f875'
    }
];
export default imgPresident