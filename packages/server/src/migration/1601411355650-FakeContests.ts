import { MigrationInterface, QueryRunner } from 'typeorm';

export class FakeContests1601411355650 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Pippi on the Run (På rymmen med Pippi Långstrump)', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', '2019-11-27 08:26:29', '2020-01-06 23:53:00', 'https://gmpg.org', 'bhubber0@nydailynews.com', '{''test''}', 31, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Mummy''s Hand, The', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '2020-06-29 23:30:17', '2020-10-10 13:52:59', 'http://dailymail.co.uk', 'rbarlthrop1@omniture.com', '{''test''}', 62, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Trouble with Bliss, The', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '2020-01-17 09:18:19', '2020-08-25 08:40:31', 'http://indiegogo.com', 'sgounot2@nydailynews.com', '{''test''}', 81, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Theremin: An Electronic Odyssey', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2020-06-12 05:30:10', '2019-11-25 11:40:37', 'https://netlog.com', 'gaggett3@hc360.com', '{''test''}', 57, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Guardian, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2020-04-13 15:44:04', '2020-04-11 13:18:15', 'https://berkeley.edu', 'lbriztman4@ning.com', '{''test''}', 43, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Sokkotanssi', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', '2020-04-22 20:55:45', '2020-08-15 17:12:27', 'https://yale.edu', 'tgoodhew5@qq.com', '{''test''}', 4, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Love Can Seriously Damage Your Health', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '2020-06-26 01:03:21', '2019-11-25 17:43:30', 'https://unesco.org', 'yjinks6@youtu.be', '{''test''}', 78, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Illustrious Corpses (Cadaveri eccellenti)', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '2020-06-14 10:19:20', '2019-11-21 03:57:35', 'http://go.com', 'sborer7@msu.edu', '{''test''}', 60, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Seven Days in Utopia', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '2020-03-31 01:03:47', '2020-06-21 03:05:50', 'https://businessinsider.com', 'lkristof8@behance.net', '{''test''}', 93, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Such a Long Journey', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2020-07-05 19:37:09', '2020-02-01 19:43:16', 'http://naver.com', 'jravenshear9@github.io', '{''test''}', 45, true, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Private Detective 62', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '2020-04-22 06:10:13', '2020-10-27 15:58:30', 'http://washingtonpost.com', 'hbordonea@exblog.jp', '{''test''}', 89, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Berlin Alexanderplatz', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-02-19 22:37:16', '2019-11-08 21:48:09', 'http://wikipedia.org', 'wpentlandb@ucoz.com', '{''test''}', 56, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('How the West Was Fun', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '2020-09-25 04:33:15', '2020-08-26 10:50:14', 'http://fema.gov', 'jsparwellc@hao123.com', '{''test''}', 27, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Shrimp on the Barbie, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '2020-04-08 17:10:32', '2019-10-08 18:07:11', 'http://usatoday.com', 'dferreod@independent.co.uk', '{''test''}', 95, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Every Which Way But Loose', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '2020-09-03 12:17:04', '2019-10-20 13:02:39', 'http://indiatimes.com', 'lmcvittye@microsoft.com', '{''test''}', 43, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Legend of Zorro, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '2020-09-13 05:58:02', '2020-03-07 15:10:05', 'https://ox.ac.uk', 'cspellecyf@wp.com', '{''test''}', 1, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Disclosure', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '2020-02-17 12:52:58', '2020-05-17 21:03:38', 'http://springer.com', 'msolag@dailymail.co.uk', '{''test''}', 15, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Beck - Rum 302', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '2020-01-06 07:08:58', '2019-11-16 01:50:26', 'https://csmonitor.com', 'cfeaviourh@google.nl', '{''test''}', 2, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Millennium', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '2019-11-21 00:28:20', '2020-11-26 05:46:01', 'https://4shared.com', 'sphillcoxi@umich.edu', '{''test''}', 5, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Breaking and Entering', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '2019-11-04 12:46:28', '2020-08-17 14:45:08', 'http://shop-pro.jp', 'cwoodroofj@homestead.com', '{''test''}', 69, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Jerry Springer: Ringmaster', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '2019-11-14 03:50:27', '2019-10-21 23:55:23', 'https://hostgator.com', 'oisaacsonk@usnews.com', '{''test''}', 37, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Waterboy, The', 'Fusce consequat. Nulla nisl. Nunc nisl.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '2020-08-06 21:30:29', '2020-08-28 18:56:19', 'https://com.com', 'odrewesl@hc360.com', '{''test''}', 48, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Class of Nuke ''Em High Part II: Subhumanoid Meltdown', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '2020-04-13 09:16:36', '2020-05-30 08:30:49', 'http://delicious.com', 'klangerm@mayoclinic.com', '{''test''}', 96, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Drömkåken', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '2020-07-05 00:36:54', '2020-04-15 19:51:41', 'http://google.com.hk', 'lnibloen@cyberchimps.com', '{''test''}', 93, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Experiment in Terror', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2019-10-11 06:08:44', '2020-05-05 10:44:09', 'http://blogspot.com', 'ypextono@t-online.de', '{''test''}', 99, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Great Gatsby, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-03-18 10:58:51', '2020-08-10 14:29:43', 'https://bloomberg.com', 'estangep@irs.gov', '{''test''}', 64, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Legend of Bigfoot, The', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '2019-10-22 04:48:16', '2019-12-18 23:54:44', 'http://biglobe.ne.jp', 'aflochq@shinystat.com', '{''test''}', 77, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Entitled, The', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '2019-11-28 10:38:04', '2020-09-25 09:45:12', 'https://nyu.edu', 'phirsthouser@sina.com.cn', '{''test''}', 17, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Stunt Man, The', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '2020-07-07 08:16:54', '2020-05-02 18:30:28', 'https://eepurl.com', 'gceresas@infoseek.co.jp', '{''test''}', 18, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Clouds of May (Mayis sikintisi)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '2020-10-04 22:46:13', '2020-07-25 21:08:02', 'https://example.com', 'mhubbartt@engadget.com', '{''test''}', 61, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Gentlemen Broncos', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '2020-11-10 18:16:16', '2020-01-11 08:55:11', 'https://harvard.edu', 'oschniederu@flickr.com', '{''test''}', 94, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Beck - Familjen', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '2020-10-17 11:04:36', '2020-09-09 03:14:58', 'http://networkadvertising.org', 'ehatherleyv@joomla.org', '{''test''}', 81, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Air Raid Wardens', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-03-21 12:59:36', '2020-05-15 22:58:18', 'https://bluehost.com', 'mwhitehallw@facebook.com', '{''test''}', 70, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Mrs. Miniver', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '2019-10-11 03:15:00', '2020-03-03 19:40:32', 'http://csmonitor.com', 'jfeyex@xinhuanet.com', '{''test''}', 90, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Tart', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '2020-01-22 01:56:06', '2020-01-25 08:17:10', 'http://mit.edu', 'phylandy@pbs.org', '{''test''}', 1, true, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Around the World in 80 Days', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '2020-06-10 04:24:26', '2019-11-25 08:09:22', 'https://homestead.com', 'elawnz@techcrunch.com', '{''test''}', 53, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Ogre, The (Unhold, Der)', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-08-09 20:00:31', '2020-01-14 16:40:34', 'https://rediff.com', 'bforbes10@wp.com', '{''test''}', 24, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Attack of the 50ft Cheerleader', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '2020-10-02 19:20:38', '2020-10-18 04:40:09', 'http://scribd.com', 'pcardwell11@tinypic.com', '{''test''}', 18, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Ice Age: Dawn of the Dinosaurs', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '2020-02-16 12:02:28', '2020-10-17 22:04:01', 'http://mashable.com', 'mwayon12@pbs.org', '{''test''}', 46, true, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Enchanted April', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '2019-10-04 16:03:53', '2020-10-22 21:31:09', 'https://sphinn.com', 'gneeves13@gravatar.com', '{''test''}', 63, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('News from a Personal War (Notícias de uma Guerra Particular)', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '2020-02-05 15:13:47', '2019-10-14 11:12:15', 'http://ow.ly', 'dcarvil14@admin.ch', '{''test''}', 52, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Flashback', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '2020-11-23 06:44:20', '2019-11-07 15:53:12', 'https://ask.com', 'hpaddeley15@lycos.com', '{''test''}', 84, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Empire State', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '2020-05-05 06:02:54', '2020-02-29 00:35:04', 'https://networksolutions.com', 'gnicholes16@alexa.com', '{''test''}', 13, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Man Who Quit Smoking, The (Mannen som slutade röka)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '2020-01-24 11:51:41', '2020-04-23 12:10:00', 'http://hubpages.com', 'ebent17@tuttocitta.it', '{''test''}', 68, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('José and Pilar (José e Pilar)', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '2020-07-28 10:40:25', '2020-07-23 04:11:39', 'http://indiegogo.com', 'nwitts18@msu.edu', '{''test''}', 99, true, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Enemy Within, The (O ehthros mou)', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '2020-09-24 00:41:01', '2020-09-15 21:05:55', 'https://quantcast.com', 'laugur19@addtoany.com', '{''test''}', 45, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Space Pirate Captain Harlock', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '2020-05-21 16:08:16', '2020-11-14 11:01:12', 'https://photobucket.com', 'pbushel1a@addtoany.com', '{''test''}', 97, true, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Girl Who Leapt Through Time, The (Toki o kakeru shôjo)', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '2020-10-24 03:36:45', '2020-04-05 20:54:04', 'http://fotki.com', 'gchater1b@bbb.org', '{''test''}', 26, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Henry Kissinger: Secrets of a Superpower (Henry Kissinger - Geheimnisse einer Supermacht)', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '2020-04-04 08:39:02', '2020-10-26 01:53:00', 'http://google.fr', 'jpeattie1c@fema.gov', '{''test''}', 46, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('First Case, Second Case (Ghazieh-e Shekl-e Aval, Ghazieh-e Shekl-e Dou Wom)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '2019-11-01 04:53:20', '2020-02-20 01:49:46', 'http://theguardian.com', 'aokenfold1d@webmd.com', '{''test''}', 31, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Across the Sea of Time', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '2019-12-15 01:31:40', '2020-03-19 06:27:49', 'https://nhs.uk', 'hdover1e@about.me', '{''test''}', 1, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Investigating Sex (a.k.a. Intimate Affairs)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '2019-12-02 15:45:41', '2020-01-28 03:43:46', 'http://wordpress.org', 'oblundel1f@i2i.jp', '{''test''}', 61, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Sea Wolves, The', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '2019-11-02 09:32:41', '2019-12-21 00:46:51', 'https://hao123.com', 'whonsch1g@51.la', '{''test''}', 24, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Ladybugs', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '2020-05-28 07:56:04', '2020-10-06 13:10:51', 'https://gravatar.com', 'tberrey1h@chicagotribune.com', '{''test''}', 8, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Redemption (Hummingbird)', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '2020-09-08 15:43:05', '2020-05-25 05:55:16', 'https://abc.net.au', 'clamacraft1i@so-net.ne.jp', '{''test''}', 66, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Chinese Odyssey 2002 (Tian xia wu shuang)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '2020-04-14 19:36:40', '2020-08-30 10:00:24', 'https://illinois.edu', 'egrutchfield1j@google.co.uk', '{''test''}', 38, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Coup de grâce (Der Fangschuß)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '2019-11-11 17:25:01', '2020-11-25 13:52:00', 'http://abc.net.au', 'mrowaszkiewicz1k@feedburner.com', '{''test''}', 88, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Ball, The (Le bal)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '2020-01-30 13:36:38', '2020-01-26 14:29:52', 'https://businessinsider.com', 'tsweet1l@addthis.com', '{''test''}', 42, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Jin Roh: The Wolf Brigade (Jin-Rô)', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '2020-11-26 01:47:04', '2020-05-21 19:46:47', 'https://booking.com', 'masser1m@blogs.com', '{''test''}', 28, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Interview', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '2020-11-06 03:34:41', '2020-01-29 22:47:31', 'https://uiuc.edu', 'csharples1n@merriam-webster.com', '{''test''}', 37, true, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Hairdresser''s Husband, The (Le mari de la coiffeuse)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', '2020-02-14 01:56:24', '2019-10-04 17:52:36', 'https://facebook.com', 'nwanklyn1o@amazon.co.uk', '{''test''}', 46, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('House of Mirth, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '2020-11-25 22:54:48', '2020-06-07 13:11:46', 'http://hatena.ne.jp', 'ahowsin1p@usa.gov', '{''test''}', 7, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('13 Frightened Girls! (Candy Web, The)', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2020-06-08 13:16:00', '2020-09-01 16:36:53', 'http://psu.edu', 'wtorel1q@bigcartel.com', '{''test''}', 28, true, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Mikado, The', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '2020-09-04 15:15:18', '2020-08-28 00:29:01', 'http://naver.com', 'bfrankel1r@umich.edu', '{''test''}', 97, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Adventure in Space and Time, An', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '2020-10-29 01:03:18', '2020-09-27 09:23:27', 'http://walmart.com', 'lcroome1s@stumbleupon.com', '{''test''}', 49, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Jungle Creature: Hugo, The (Jungledyret) (Go Hugo Go)', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2019-10-22 21:06:43', '2020-01-15 04:20:17', 'http://nydailynews.com', 'bsteanson1t@princeton.edu', '{''test''}', 7, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Absurdistan', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '2020-05-04 18:39:00', '2020-06-20 05:39:27', 'http://salon.com', 'chaseman1u@joomla.org', '{''test''}', 67, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Gambit', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '2020-08-29 20:15:49', '2020-05-14 19:06:02', 'https://g.co', 'kdebnam1v@histats.com', '{''test''}', 26, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Cosmic Monster, The', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '2020-03-30 00:00:46', '2020-08-31 15:26:31', 'https://mtv.com', 'cmosdill1w@wikia.com', '{''test''}', 95, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Camilla', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '2020-02-27 15:49:02', '2020-10-07 00:58:34', 'http://bravesites.com', 'mraffles1x@wordpress.com', '{''test''}', 3, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Boiling Point (3-4 x jûgatsu)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '2020-09-10 12:46:51', '2019-12-02 20:56:09', 'https://themeforest.net', 'llemerle1y@msu.edu', '{''test''}', 63, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Storm Over Asia (Potomok Chingis-Khana)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2019-12-18 04:39:21', '2020-03-10 03:24:33', 'http://discuz.net', 'nredholls1z@wufoo.com', '{''test''}', 21, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Hostel', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '2020-04-08 04:35:29', '2020-02-12 04:09:35', 'https://slashdot.org', 'jfernihough20@dedecms.com', '{''test''}', 36, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Youth of the Son', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '2020-11-05 04:32:26', '2019-12-25 09:04:14', 'https://posterous.com', 'hlesaunier21@forbes.com', '{''test''}', 84, false, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Son of the Sheik, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '2020-08-29 07:35:53', '2020-03-17 13:20:09', 'http://miitbeian.gov.cn', 'javarne22@zdnet.com', '{''test''}', 70, true, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Handsome Harry', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2019-10-07 20:58:01', '2019-11-10 14:17:32', 'http://constantcontact.com', 'ccoathup23@163.com', '{''test''}', 51, true, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Throw Away Your Books, Rally in the Streets', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '2020-05-31 02:34:01', '2020-05-25 19:00:53', 'http://xrea.com', 'gspickett24@skype.com', '{''test''}', 93, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Ro.Go.Pa.G.', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '2020-01-26 04:20:51', '2020-07-29 10:23:10', 'http://alexa.com', 'halvey25@walmart.com', '{''test''}', 2, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Apartment, The (Appartement, L'')', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2019-12-31 23:52:28', '2020-01-23 19:33:30', 'http://amazon.co.jp', 'brisman26@huffingtonpost.com', '{''test''}', 11, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Trois', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '2019-11-17 15:51:10', '2020-02-17 08:41:40', 'https://techcrunch.com', 'dmackimm27@wordpress.com', '{''test''}', 3, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Lost and Found', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '2020-04-11 12:10:29', '2019-10-04 12:45:06', 'https://bigcartel.com', 'fbreede28@dropbox.com', '{''test''}', 78, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('3 A.M.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '2020-08-21 13:54:07', '2020-02-14 12:24:00', 'http://meetup.com', 'mswanwick29@princeton.edu', '{''test''}', 81, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Incredible Rocky Mountain Race', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '2020-05-28 04:20:45', '2020-04-25 21:57:37', 'http://youtu.be', 'blethley2a@devhub.com', '{''test''}', 1, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Tony Rome', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', '2020-02-18 02:15:48', '2019-12-18 20:00:41', 'http://statcounter.com', 'wtocher2b@miitbeian.gov.cn', '{''test''}', 3, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Kentucky Fried Movie, The', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '2020-07-19 01:51:10', '2020-10-04 19:55:50', 'http://addtoany.com', 'adiament2c@godaddy.com', '{''test''}', 53, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Kung Fu Panda: Secrets of the Furious Five', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', '2020-03-19 23:50:51', '2020-03-27 10:20:38', 'https://delicious.com', 'lmackenney2d@deviantart.com', '{''test''}', 15, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Cremaster 5', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Fusce consequat. Nulla nisl. Nunc nisl.', '2020-01-23 07:32:22', '2020-02-08 01:04:52', 'http://myspace.com', 'taldritt2e@sourceforge.net', '{''test''}', 66, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Frogs', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2020-02-13 09:36:37', '2020-06-19 15:12:47', 'http://aboutads.info', 'vtuckerman2f@soup.io', '{''test''}', 66, false, true, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Rudolph the Red-Nosed Reindeer', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '2020-04-13 07:29:03', '2020-02-02 23:35:29', 'http://salon.com', 'jleyland2g@wikia.com', '{''test''}', 39, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Dead in Tombstone', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '2020-05-16 09:37:01', '2020-09-15 09:50:52', 'https://springer.com', 'apiggott2h@globo.com', '{''test''}', 24, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Nom de code : Rose', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '2020-09-26 19:41:42', '2020-04-13 04:55:17', 'http://issuu.com', 'cheliar2i@networksolutions.com', '{''test''}', 36, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('High Hopes', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '2020-06-20 19:44:17', '2019-12-07 05:41:44', 'http://geocities.com', 'rgodbolt2j@google.com', '{''test''}', 17, false, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Mater and the Ghostlight', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '2020-04-24 22:47:24', '2020-06-01 17:29:06', 'https://addtoany.com', 'nferrotti2k@dagondesign.com', '{''test''}', 99, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Tyrannosaur', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '2020-11-12 10:36:13', '2020-10-25 19:30:18', 'http://uiuc.edu', 'jbuckeridge2l@eventbrite.com', '{''test''}', 43, false, true, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Boss of It All, The (Direktøren for det hele)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '2020-02-05 16:51:28', '2020-01-18 19:52:13', 'https://chicagotribune.com', 'dleblanc2m@wunderground.com', '{''test''}', 61, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Weeds', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2020-09-25 17:01:01', '2020-07-15 10:55:05', 'http://de.vu', 'msearchfield2n@4shared.com', '{''test''}', 90, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Girl, The (Flickan)', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '2020-03-20 16:54:46', '2020-01-26 18:55:32', 'https://taobao.com', 'kbertomeu2o@typepad.com', '{''test''}', 17, true, false, 4, true);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Joker Is Wild, The (All the Way)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '2019-11-08 10:13:08', '2020-05-27 00:19:36', 'https://quantcast.com', 'jchatell2p@wikimedia.org', '{''test''}', 45, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Love in Another Language (Baska Dilde Ask)', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '2019-11-16 21:27:21', '2020-11-19 02:07:09', 'https://hubpages.com', 'cwhiteford2q@infoseek.co.jp', '{''test''}', 23, true, false, 4, false);
insert into contests (name, thumbnail, description, "endDate", "startDate", website, email, tags, length, private, leaderboard, "creatorId", open) values ('Platinum Blonde', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', '2019-11-27 00:31:46', '2020-04-30 10:02:00', 'http://icq.com', 'rturban2r@domainmarket.com', '{''test''}', 19, true, false, 4, true);

        `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
